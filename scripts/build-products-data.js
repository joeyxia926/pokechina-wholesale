const fs = require("fs");

function parseCsv(text) {
  const lines = text.replace(/^\uFEFF/, "").split(/\r?\n/).filter(Boolean);
  const headers = lines[0].split(",").map((header) => header.trim());
  return lines.slice(1).map((line) => {
    const values = [line.trim()];
    return Object.fromEntries(headers.map((header, index) => [header, values[index] || ""]));
  });
}

function categoryFor(name) {
  const lower = name.toLowerCase();
  if (lower.includes("booster box") || lower.includes("jumbo booster")) return "Booster Box";
  if (lower.includes("etb")) return "ETB";
  if (lower.includes("single") || lower.includes("cardset") || lower.includes("holo card")) return "Single Cards";
  if (lower.includes("coin")) return "Coin Sets";
  if (lower.includes("gift box") || lower.includes("collection") || lower.includes("display set")) return "Gift Boxes";
  if (lower.includes("sleeve") || lower.includes("deck box") || lower.includes("holder") || lower.includes("counter")) return "Accessories";
  if (lower.includes("plush") || lower.includes("figure") || lower.includes("magnet")) return "Collectibles";
  if (lower.includes("riftbound") || lower.includes("league of legends")) return "Other Chinese TCG";
  return "Chinese Pokemon Products";
}

function detailsFor(name, category) {
  const lower = name.toLowerCase();
  const codeMatch = name.match(/^([A-Z0-9.]+C?):/);
  const seriesCode = codeMatch ? codeMatch[1] : "";
  const releaseFamily = seriesCode ? `${seriesCode} Simplified Chinese release` : "Simplified Chinese release";
  const packaging = lower.includes("loose") ? "Loose box availability" : lower.includes("jumbo") ? "Jumbo booster configuration" : "Sealed wholesale configuration";
  const buyerUse = category === "Single Cards"
    ? "Ideal for singles inventory, collector showcases, and livestream card sales."
    : category === "Gift Boxes"
      ? "Strong fit for retail shelves, livestream bundles, and premium collectible offers."
      : category === "Other Chinese TCG"
        ? "Useful for stores expanding into Chinese-language TCG opportunities beyond Pokemon."
        : "Designed for card shops, online sellers, distributors, and repeat wholesale buyers.";

  return {
    releaseFamily,
    packConfiguration: packaging,
    shippingOrigin: "China / U.S. coordinated fulfillment",
    moq: "Request current MOQ",
    description: `${name} is part of the Chinese-language TCG wholesale catalog available through PokeChina Wholesale. ${buyerUse}`,
  };
}

function imagePlaceholder(name, category) {
  const bg = category === "Booster Box" ? "#e3350d" : category === "Gift Boxes" ? "#2f80ed" : category === "Accessories" ? "#5c6670" : "#1f2933";
  const title = name.replace(/&/g, "and").slice(0, 42);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="620" viewBox="0 0 900 620">
    <rect width="900" height="620" fill="#f8fafc"/>
    <rect x="54" y="54" width="792" height="512" rx="28" fill="${bg}"/>
    <circle cx="730" cy="146" r="68" fill="#fff" opacity=".18"/>
    <circle cx="730" cy="146" r="34" fill="#fff" opacity=".28"/>
    <text x="92" y="144" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="700" fill="#fff">PokeChina Wholesale</text>
    <text x="92" y="214" font-family="Arial, Helvetica, sans-serif" font-size="48" font-weight="800" fill="#fff">${escapeXml(category)}</text>
    <foreignObject x="92" y="260" width="640" height="180">
      <div xmlns="http://www.w3.org/1999/xhtml" style="font-family:Arial,Helvetica,sans-serif;color:white;font-size:38px;font-weight:800;line-height:1.16">${escapeXml(title)}</div>
    </foreignObject>
    <text x="92" y="506" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="700" fill="#ffcb05">Request Wholesale Pricing</text>
  </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const rows = parseCsv(fs.readFileSync("products.csv", "utf8"));
const assets = fs.existsSync("product-assets.json")
  ? JSON.parse(fs.readFileSync("product-assets.json", "utf8"))
  : {};
const products = rows.map((row, index) => {
  const name = row.product_name;
  const category = categoryFor(name);
  const asset = assets[name] || {};
  return {
    id: `pcw-${String(index + 1).padStart(3, "0")}`,
    name,
    category,
    imageUrl: asset.imageUrl || imagePlaceholder(name, category),
    imageAlt: asset.imageAlt || `${name.replace(/:/g, "")} Chinese Pokemon wholesale product image`,
    sourceUrl: asset.sourceUrl || "",
    sourceTitle: asset.sourceTitle || "",
    sourceHost: asset.sourceHost || "",
    ...detailsFor(name, category),
  };
});

fs.writeFileSync(
  "products-data.js",
  `window.POKECHINA_PRODUCTS = ${JSON.stringify(products, null, 2)};\n`
);

console.log(`Wrote products-data.js with ${products.length} products.`);
