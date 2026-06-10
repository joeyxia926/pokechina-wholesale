const fs = require("fs");
const path = require("path");

const DEFAULT_MESSAGE = "Chinese Pokemon TCG wholesale product image";

function parseCsv(text) {
  const lines = text.replace(/^\uFEFF/, "").split(/\r?\n/).filter(Boolean);
  if (!lines.length) return [];
  const headers = parseCsvLine(lines[0]);
  return lines.slice(1).map((line) => {
    const values = parseCsvLine(line);
    return Object.fromEntries(headers.map((header, index) => [header, values[index] || ""]));
  });
}

function parseCsvLine(line) {
  const values = [];
  let current = "";
  let quoted = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];
    if (char === '"' && quoted && next === '"') {
      current += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      values.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }

  values.push(current.trim());
  return values;
}

function toCsvValue(value) {
  const text = String(value || "");
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function writeCsv(rows, filePath) {
  const headers = Array.from(new Set(rows.flatMap((row) => Object.keys(row))));
  const body = rows.map((row) => headers.map((header) => toCsvValue(row[header])).join(","));
  fs.writeFileSync(filePath, `${headers.join(",")}\n${body.join("\n")}\n`);
}

function normalizeProductName(productName) {
  return productName.replace(/[^\w\s:.-]/g, "").replace(/\s+/g, " ").trim();
}

function generateAltText(productName) {
  return `${normalizeProductName(productName).replace(/:/g, "")} ${DEFAULT_MESSAGE}`;
}

function buildSearchPlans(productName, distributorDomains = []) {
  const base = `${productName} Chinese Pokemon TCG product image`;
  const plans = [
    {
      source: "google_images",
      query: `${base} high resolution`,
    },
    {
      source: "pokemon_china",
      query: `site:pokemon.cn ${base}`,
    },
  ];

  for (const domain of distributorDomains.filter(Boolean)) {
    plans.push({
      source: "distributor",
      query: `site:${domain.trim()} ${base}`,
    });
  }

  return plans;
}

function imageScore(image) {
  const width = Number(image.width || 0);
  const height = Number(image.height || 0);
  const area = width * height;
  const url = String(image.url || "").toLowerCase();
  let score = area || 1;

  if (image.source === "pokemon_china" || url.includes("pokemon.cn")) score += 2_000_000;
  if (image.source === "distributor") score += 700_000;
  if (url.includes("logo") || url.includes("placeholder") || url.includes("sprite")) score -= 1_000_000;
  if (url.endsWith(".webp")) score += 100_000;
  if (url.endsWith(".png")) score += 80_000;

  return score;
}

function chooseBestImage(images) {
  return [...images]
    .filter((image) => image && image.url)
    .sort((a, b) => imageScore(b) - imageScore(a))[0] || null;
}

async function searchImages(plan) {
  if (process.env.SERPAPI_KEY) return searchWithSerpApi(plan);
  if (process.env.GOOGLE_CSE_KEY && process.env.GOOGLE_CSE_CX) return searchWithGoogleCse(plan);
  throw new Error("Set SERPAPI_KEY or GOOGLE_CSE_KEY plus GOOGLE_CSE_CX before searching images.");
}

async function searchWithSerpApi(plan) {
  const url = new URL("https://serpapi.com/search.json");
  url.searchParams.set("engine", "google_images");
  url.searchParams.set("q", plan.query);
  url.searchParams.set("api_key", process.env.SERPAPI_KEY);

  const response = await fetch(url);
  if (!response.ok) throw new Error(`SerpAPI search failed: ${response.status}`);
  const data = await response.json();
  return (data.images_results || []).map((item) => ({
    source: plan.source,
    url: item.original || item.thumbnail,
    width: item.original_width || item.width,
    height: item.original_height || item.height,
    title: item.title,
    pageUrl: item.link,
  }));
}

async function searchWithGoogleCse(plan) {
  const url = new URL("https://www.googleapis.com/customsearch/v1");
  url.searchParams.set("key", process.env.GOOGLE_CSE_KEY);
  url.searchParams.set("cx", process.env.GOOGLE_CSE_CX);
  url.searchParams.set("searchType", "image");
  url.searchParams.set("num", "10");
  url.searchParams.set("q", plan.query);

  const response = await fetch(url);
  if (!response.ok) throw new Error(`Google CSE image search failed: ${response.status}`);
  const data = await response.json();
  return (data.items || []).map((item) => ({
    source: plan.source,
    url: item.link,
    width: item.image && item.image.width,
    height: item.image && item.image.height,
    title: item.title,
    pageUrl: item.image && item.image.contextLink,
  }));
}

async function uploadToSupabaseStorage(imageUrl, productName) {
  const bucket = process.env.SUPABASE_STORAGE_BUCKET;
  if (!bucket) return imageUrl;

  const supabaseUrl = requireEnv("SUPABASE_URL").replace(/\/$/, "");
  const serviceKey = requireEnv("SUPABASE_SERVICE_ROLE_KEY");
  const imageResponse = await fetch(imageUrl);
  if (!imageResponse.ok) throw new Error(`Image download failed: ${imageResponse.status} ${imageUrl}`);

  const contentType = imageResponse.headers.get("content-type") || "image/jpeg";
  const extension = contentType.includes("png") ? "png" : contentType.includes("webp") ? "webp" : "jpg";
  const objectName = `${slugify(productName)}.${extension}`;
  const uploadUrl = `${supabaseUrl}/storage/v1/object/${bucket}/${objectName}`;

  const uploadResponse = await fetch(uploadUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${serviceKey}`,
      apikey: serviceKey,
      "content-type": contentType,
      "x-upsert": "true",
    },
    body: Buffer.from(await imageResponse.arrayBuffer()),
  });

  if (!uploadResponse.ok) {
    throw new Error(`Supabase storage upload failed: ${uploadResponse.status} ${await uploadResponse.text()}`);
  }

  return `${supabaseUrl}/storage/v1/object/public/${bucket}/${objectName}`;
}

async function updateSupabaseProduct(productName, imageUrl, altText) {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) return;

  const supabaseUrl = process.env.SUPABASE_URL.replace(/\/$/, "");
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const table = process.env.SUPABASE_TABLE || "products";
  const matchColumn = process.env.SUPABASE_MATCH_COLUMN || "product_name";
  const endpoint = `${supabaseUrl}/rest/v1/${table}?${encodeURIComponent(matchColumn)}=eq.${encodeURIComponent(productName)}`;

  const response = await fetch(endpoint, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${serviceKey}`,
      apikey: serviceKey,
      "content-type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      image_url: imageUrl,
      image_alt_text: altText,
    }),
  });

  if (!response.ok) {
    throw new Error(`Supabase product update failed: ${response.status} ${await response.text()}`);
  }
}

function requireEnv(name) {
  if (!process.env[name]) throw new Error(`Missing required environment variable: ${name}`);
  return process.env[name];
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 90);
}

async function enrichProduct(row, distributorDomains) {
  const productName = row.product_name || row.name || row.ProductName;
  if (!productName) throw new Error("CSV row is missing product_name.");

  const plans = buildSearchPlans(productName, distributorDomains);
  const results = [];
  for (const plan of plans) {
    results.push(...await searchImages(plan));
  }

  const best = chooseBestImage(results);
  if (!best) throw new Error(`No image found for ${productName}`);

  const storedImageUrl = await uploadToSupabaseStorage(best.url, productName);
  const altText = generateAltText(productName);
  await updateSupabaseProduct(productName, storedImageUrl, altText);

  return {
    ...row,
    image_url: storedImageUrl,
    image_alt_text: altText,
    image_source_page: best.pageUrl || "",
  };
}

async function main() {
  const csvPath = process.argv[2] || "products.csv";
  const outputPath = process.argv[3] || "products.enriched.csv";
  const distributorDomains = (process.env.DISTRIBUTOR_DOMAINS || "")
    .split(",")
    .map((domain) => domain.trim())
    .filter(Boolean);

  const rows = parseCsv(fs.readFileSync(csvPath, "utf8"));
  const enriched = [];

  for (const [index, row] of rows.entries()) {
    const productName = row.product_name || row.name || row.ProductName;
    console.log(`[${index + 1}/${rows.length}] Searching image for ${productName}`);
    try {
      enriched.push(await enrichProduct(row, distributorDomains));
    } catch (error) {
      console.error(`Failed: ${productName} - ${error.message}`);
      enriched.push({ ...row, image_error: error.message });
    }
  }

  writeCsv(enriched, path.resolve(outputPath));
  console.log(`Wrote ${outputPath}`);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

module.exports = {
  buildSearchPlans,
  chooseBestImage,
  generateAltText,
  parseCsv,
};
