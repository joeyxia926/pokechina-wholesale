const fs = require("fs");

const PRODUCTS_CSV = "products.csv";
const OUTPUT = "product-assets.json";
const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36";

function parseCsv(text) {
  return text.replace(/^\uFEFF/, "").split(/\r?\n/).filter(Boolean).slice(1).map((line) => line.trim());
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function duckImages(query) {
  const pageUrl = `https://duckduckgo.com/?q=${encodeURIComponent(query)}&iax=images&ia=images`;
  const page = await fetch(pageUrl, { headers: { "user-agent": USER_AGENT } }).then((response) => response.text());
  const vqd = page.match(/vqd="([^"]+)/)?.[1];
  if (!vqd) return [];

  const apiUrl = `https://duckduckgo.com/i.js?l=us-en&o=json&q=${encodeURIComponent(query)}&vqd=${encodeURIComponent(vqd)}&f=,,,&p=1`;
  const response = await fetch(apiUrl, {
    headers: {
      "user-agent": USER_AGENT,
      "referer": "https://duckduckgo.com/",
    },
  });
  if (!response.ok) return [];
  const data = await response.json();
  return data.results || [];
}

function sourceScore(url) {
  const host = safeHost(url);
  if (host.includes("pokemon.cn")) return 10_000_000;
  if (host.includes("pokemon.com")) return 9_000_000;
  if (host.includes("card-binder.com")) return 2_000_000;
  if (host.includes("cardtrader.com")) return 2_100_000;
  if (host.includes("pokeunlimited.com")) return 2_000_000;
  if (host.includes("1collectibles.com")) return 1_900_000;
  if (host.includes("sunnysidecardhouse.com")) return 1_850_000;
  if (host.includes("pokewayne.com")) return 1_800_000;
  if (host.includes("lamas-store.com")) return 1_700_000;
  if (host.includes("sammelspot.de")) return 1_700_000;
  if (host.includes("ankorstore.com")) return 1_650_000;
  if (host.includes("omegabuddy.com")) return 1_600_000;
  if (host.includes("pokeguardian.com")) return 1_600_000;
  if (host.includes("atsbullion.com") || host.includes("britannia") || host.includes("bullion")) return -5_000_000;
  if (host.includes("ebay.") || host.includes("carousell") || host.includes("ricardo.")) return -400_000;
  return 0;
}

function imageScore(result, productName) {
  const image = result.image || "";
  const title = `${result.title || ""} ${result.url || ""}`.toLowerCase();
  const nameTokens = productName.toLowerCase().split(/[^a-z0-9]+/).filter((token) => token.length > 2);
  const matchedTokens = nameTokens.filter((token) => title.includes(token)).length;
  const requiredRatio = productName.length > 28 ? 0.45 : 0.34;
  const matchRatio = nameTokens.length ? matchedTokens / nameTokens.length : 0;
  const dimensions = Number(result.width || 0) * Number(result.height || 0);
  let score = dimensions + sourceScore(result.url) + matchedTokens * 75_000;

  if (/pokemon|pokémon|宝可梦|chinese|simplified|tcg/i.test(title)) score += 250_000;
  if (/booster|gift|box|collection|coin|set|deck|sleeve|plush|figure/i.test(title)) score += 150_000;
  if (/logo|icon|placeholder|avatar|banner/i.test(image + title)) score -= 2_000_000;
  if (/gold|bullion|britanni|panda|coin dealer/i.test(image + title)) score -= 5_000_000;
  if (image.includes("cdn/shop") || image.includes("media")) score += 150_000;
  if (!/^https?:\/\//.test(image)) score -= 5_000_000;
  if (matchRatio < requiredRatio) score -= 2_500_000;

  return score;
}

function safeHost(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function bestResult(results, productName) {
  return results
    .filter((result) => result.image)
    .sort((a, b) => imageScore(b, productName) - imageScore(a, productName))[0] || null;
}

function altText(productName) {
  return `${productName.replace(/:/g, "")} Chinese Pokemon wholesale product image`;
}

async function findAsset(productName) {
  const queries = [
    `"${productName}"`,
    `${productName} Chinese Pokemon TCG product`,
    `${productName} Simplified Chinese Pokemon`,
  ];
  const results = [];
  for (const query of queries) {
    results.push(...await duckImages(query));
    await sleep(350);
  }
  const best = bestResult(results, productName);
  if (!best) {
    return {
      imageUrl: "",
      imageAlt: altText(productName),
      sourceUrl: "",
      sourceTitle: "",
      sourceHost: "",
    };
  }
  return {
    imageUrl: best.image,
    imageAlt: altText(productName),
    sourceUrl: best.url || "",
    sourceTitle: best.title || "",
    sourceHost: safeHost(best.url || best.image),
    imageWidth: best.width || "",
    imageHeight: best.height || "",
  };
}

async function main() {
  const products = parseCsv(fs.readFileSync(PRODUCTS_CSV, "utf8"));
  const existing = fs.existsSync(OUTPUT) ? JSON.parse(fs.readFileSync(OUTPUT, "utf8")) : {};
  const output = { ...existing };

  for (const [index, productName] of products.entries()) {
    if (output[productName]?.imageUrl) {
      console.log(`[${index + 1}/${products.length}] cached ${productName}`);
      continue;
    }
    console.log(`[${index + 1}/${products.length}] searching ${productName}`);
    try {
      output[productName] = await findAsset(productName);
    } catch (error) {
      output[productName] = {
        imageUrl: "",
        imageAlt: altText(productName),
        sourceUrl: "",
        sourceTitle: "",
        sourceHost: "",
        error: error.message,
      };
    }
    fs.writeFileSync(OUTPUT, JSON.stringify(output, null, 2));
    await sleep(500);
  }

  const found = Object.values(output).filter((asset) => asset.imageUrl).length;
  console.log(`Wrote ${OUTPUT}. Found images for ${found}/${products.length} products.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
