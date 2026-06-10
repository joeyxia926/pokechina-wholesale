const fs = require("fs");
const vm = require("vm");

const html = fs.readFileSync("index.html", "utf8");
const productsHtml = fs.readFileSync("products.html", "utf8");
const productDataScript = fs.readFileSync("products-data.js", "utf8");
const sitemap = fs.readFileSync("sitemap.xml", "utf8");
const robots = fs.readFileSync("robots.txt", "utf8");
const htmlFiles = fs.readdirSync(".").filter((file) => file.endsWith(".html") && !/^google.*\.html$/.test(file));

const requiredText = [
  "Chinese Pokemon Wholesale Made Simple",
  "Wholesale Process",
  "Useful Links",
  "Chat on WhatsApp",
  "Hello%2C%20I%20am%20interested%20in%20Chinese%20Pok%C3%A9mon%20wholesale%20pricing.",
  "https://www.instagram.com/lasvegas_pokemon_wholesale/",
  "https://www.tiktok.com/@universal.breakz?is_from_webapp=1&sender_device=pc",
  "https://www.whatnot.com/s/JMnqBCi3",
  "mailto:usma.pokemon.2026@gmail.com",
];

const requiredLinks = [
  "index.html",
  "products.html",
  "about.html",
  "inquiry.html",
  "encyclopedia.html",
  "insights.html",
  "faq.html",
  "contact.html",
];

const requiredButtons = [
  "Request Wholesale Pricing",
  "Contact Us",
  "View Products",
  "Become a Wholesale Customer",
];

const missing = [];

for (const text of requiredText) {
  if (!html.includes(text)) missing.push(`Missing text: ${text}`);
}

for (const file of htmlFiles) {
  const page = fs.readFileSync(file, "utf8");
  if (!page.includes("assets/horizontal-white-bg-1200.png")) missing.push(`${file} missing header logo.`);
  if (!page.includes("assets/icon-square-128.png")) missing.push(`${file} missing favicon.`);
}

for (const link of requiredLinks) {
  if (!html.includes(`href="${link}"`)) missing.push(`Missing link: ${link}`);
  if (!fs.existsSync(link)) missing.push(`Missing page file: ${link}`);
}

for (const label of requiredButtons) {
  if (!html.includes(label)) missing.push(`Missing CTA: ${label}`);
}

if (!/https:\/\/wa\.me\/\d+\?text=Hello%2C%20I%20am%20interested%20in%20Chinese%20Pok%C3%A9mon%20wholesale%20pricing\./.test(html)) {
  missing.push("WhatsApp link must include an international-format number.");
}

if (html.includes("product-catalog") || html.includes("products-data.js")) {
  missing.push("Homepage should not include the full product catalog.");
}
for (const text of ["Chinese Pokemon Products", "catalog-search", "catalog-count", "products-data.js"]) {
  if (!productsHtml.includes(text)) missing.push(`Products page missing: ${text}`);
}
if (!productsHtml.includes("product-image-placeholder")) {
  missing.push("Products page should keep a product image placeholder area.");
}
if (productsHtml.includes("product-image-wrap") || productsHtml.includes("<img class=\"product-image\"")) {
  missing.push("Products page should keep image space but not render actual product images yet.");
}

const sandbox = { window: {} };
vm.runInNewContext(productDataScript, sandbox);
const products = sandbox.window.POKECHINA_PRODUCTS || [];
if (products.length !== 87) missing.push(`Expected 87 products, found ${products.length}.`);
if (!products.every((product) => product.name && product.imageUrl && product.imageAlt && product.description)) {
  missing.push("Every product must include name, imageUrl, imageAlt, and description.");
}
const externalImages = products.filter((product) => /^https?:\/\//.test(product.imageUrl));
const nonOfficialExternal = products.filter((product) => /^https?:\/\//.test(product.imageUrl) && product.sourceHost !== "pokemon.cn");
if (nonOfficialExternal.length) {
  missing.push(`Expected only official external images, found ${nonOfficialExternal.length} non-official external images.`);
}
if (!products.every((product) => product.imageUrl.startsWith("data:image/svg+xml") || /^https?:\/\//.test(product.imageUrl))) {
  missing.push("Every product must have either a verified external image or generated placeholder image.");
}

if (missing.length) {
  console.error(missing.join("\n"));
  process.exit(1);
}

if (!sitemap.includes("https://www.pokechinawholesale.com/products.html")) {
  console.error("Sitemap missing products page.");
  process.exit(1);
}

if (!robots.includes("Sitemap: https://www.pokechinawholesale.com/sitemap.xml")) {
  console.error("robots.txt missing sitemap URL.");
  process.exit(1);
}

console.log("Preview content checks passed.");
