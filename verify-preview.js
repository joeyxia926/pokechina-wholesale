const fs = require("fs");
const vm = require("vm");

const html = fs.readFileSync("index.html", "utf8");
const productsHtml = fs.readFileSync("products.html", "utf8");
const dealsHtml = fs.readFileSync("deals.html", "utf8");
const productDataScript = fs.readFileSync("products-data.js", "utf8");
const productPricesScript = fs.readFileSync("product-prices.js", "utf8");
const dealsDataScript = fs.readFileSync("deals-data.js", "utf8");
const newArrivalsGalleryScript = fs.readFileSync("new-arrivals-gallery.js", "utf8");
const sitemap = fs.readFileSync("sitemap.xml", "utf8");
const robots = fs.readFileSync("robots.txt", "utf8");
const analytics = fs.readFileSync("analytics.js", "utf8");
const i18n = fs.readFileSync("i18n.js", "utf8");
const css = fs.readFileSync("site.css", "utf8");
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
  "deals.html",
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
  if (!page.includes('<meta name="description"')) missing.push(`${file} missing meta description.`);
  if (!page.includes('<link rel="canonical"')) missing.push(`${file} missing canonical URL.`);
  if (!page.includes('<meta property="og:title"')) missing.push(`${file} missing Open Graph title.`);
  if (!page.includes('<script defer src="analytics.js"></script>')) missing.push(`${file} missing analytics placeholder.`);
  if (!page.includes('<script src="i18n.js"></script>')) missing.push(`${file} missing language script.`);
  if (!page.includes('class="language-select"')) missing.push(`${file} missing language selector.`);
  if (!page.includes('<option value="zh">&#20013;&#25991;</option>') || !page.includes('<option value="ja">&#26085;&#26412;&#35486;</option>')) missing.push(`${file} missing language fallback options.`);
  if (/data-i18n="[^"]+"\s+data-i18n=/.test(page)) missing.push(`${file} has duplicate data-i18n attributes.`);
  if (!page.includes("<main class=\"page-shell\"")) missing.push(`${file} missing page transition shell.`);
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
for (const text of ["new-arrivals-section", "new-arrivals-gallery-image", "new-arrivals-gallery.js", "newArrivalsEyebrow", "newArrivalsTitle"]) {
  if (!html.includes(text)) missing.push(`Homepage new arrivals gallery missing: ${text}`);
}
for (const text of ["PCW_NEW_ARRIVAL_PHOTOS", "setInterval", "2000", "openLightbox", "new-arrivals-thumbnails"]) {
  if (!newArrivalsGalleryScript.includes(text)) missing.push(`New arrivals gallery script missing: ${text}`);
}
if ((newArrivalsGalleryScript.match(/assets\/new-arrivals\/[^"]+\.(jpg|png)/g) || []).length < 14) {
  missing.push("New arrivals gallery should include the uploaded product photos.");
}
for (const text of ["Chinese Pokemon Products", "catalog-search", "catalog-count", "products-data.js"]) {
  if (!productsHtml.includes(text)) missing.push(`Products page missing: ${text}`);
}
for (const text of ["product-prices.js", "product-price-panel", "baseCasePrice", "plusShippingFee", "shippingQuotedByDestination"]) {
  if (!productsHtml.includes(text) && !productPricesScript.includes(text) && !i18n.includes(text)) missing.push(`Product price display missing: ${text}`);
}
for (const text of ["localizeProduct", "productCategory", "productDescription", "packConfiguration", "shippingOrigin"]) {
  if (!productsHtml.includes(text) && !i18n.includes(text)) missing.push(`Product localization missing: ${text}`);
}
if (!productsHtml.includes("product-image-wrap") || !productsHtml.includes("<img class=\"product-image\"")) {
  missing.push("Products page should render uploaded product images in a consistent image frame.");
}

const sandbox = { window: {} };
vm.runInNewContext(productDataScript, sandbox);
const products = sandbox.window.POKECHINA_PRODUCTS || [];
const priceSandbox = { window: {} };
vm.runInNewContext(productPricesScript, priceSandbox);
const prices = priceSandbox.window.PCW_PRODUCT_PRICES;
if (products.length !== 127) missing.push(`Expected 127 products, found ${products.length}.`);
if (!prices || !products.every((product) => prices.get(product.name))) {
  missing.push("Every product must match a current price-sheet entry.");
}
if (/\bUPS\/CASE\/USD\b|shippingUsd/.test(productPricesScript)) {
  missing.push("Product prices file should not publish specific shipping fee amounts.");
}
if (!products.every((product) => product.name && product.imageUrl && product.imageAlt && product.description)) {
  missing.push("Every product must include name, imageUrl, imageAlt, and description.");
}
const uploadedImages = products.filter((product) => product.imageUrl.startsWith("assets/images/"));
if (uploadedImages.length < 120) {
  missing.push(`Expected most products to use uploaded images, found ${uploadedImages.length}.`);
}
if (!products.every((product) => product.imageUrl.startsWith("assets/images/") || product.imageUrl.startsWith("data:image/svg+xml"))) {
  missing.push("Every product must have either an uploaded image or generated placeholder image.");
}

for (const text of ["U.S. Clearance Deals", "deal-catalog", "deals-data.js", "Ask About Current Deals"]) {
  if (!dealsHtml.includes(text)) missing.push(`Deals page missing: ${text}`);
}
for (const text of ["dealText", "dt(deal.description)", "dt(deal.price)", "dt(deal.quantity)"]) {
  if (!dealsHtml.includes(text) && !i18n.includes(text)) missing.push(`Deal localization missing: ${text}`);
}
for (const text of ["deal-live-pill", "page-shell", "shimmer", "@keyframes pageIn", "@keyframes shimmer"]) {
  const source = text === "deal-live-pill" || text === "page-shell" ? dealsHtml : css;
  if (!source.includes(text)) missing.push(`Motion system missing: ${text}`);
}
const dealSandbox = { window: {} };
vm.runInNewContext(dealsDataScript, dealSandbox);
const deals = dealSandbox.window.POKECHINA_CLEARANCE_DEALS || [];
if (!deals.length) missing.push("Expected at least one clearance deal template.");
if (!deals.every((deal) => deal.name && deal.category && deal.price && deal.quantity && deal.location && deal.description)) {
  missing.push("Every clearance deal must include name, category, price, quantity, location, and description.");
}

if (missing.length) {
  console.error(missing.join("\n"));
  process.exit(1);
}

if (!sitemap.includes("https://www.pokechinawholesale.com/products.html")) {
  console.error("Sitemap missing products page.");
  process.exit(1);
}

if (!sitemap.includes("https://www.pokechinawholesale.com/deals.html")) {
  console.error("Sitemap missing deals page.");
  process.exit(1);
}

if (!robots.includes("Sitemap: https://www.pokechinawholesale.com/sitemap.xml")) {
  console.error("robots.txt missing sitemap URL.");
  process.exit(1);
}

if (!analytics.includes('G-27HDZZVFW0')) {
  console.error("analytics.js missing GA4 measurement ID.");
  process.exit(1);
}

for (const lang of ["en", "zh", "es", "fr", "ja"]) {
  if (!i18n.includes(`${lang}:`)) {
    console.error(`i18n.js missing ${lang} translations.`);
    process.exit(1);
  }
}

if (!css.includes(".language-select")) {
  console.error("site.css missing language selector styles.");
  process.exit(1);
}

for (const text of [".new-arrivals-section", ".new-arrivals-image.is-visible", ".new-arrivals-dots span.active"]) {
  if (!css.includes(text)) {
    console.error(`site.css missing new arrivals gallery style: ${text}`);
    process.exit(1);
  }
}
for (const text of [".new-arrivals-lightbox", ".new-arrivals-thumbnails", ".lightbox-next"]) {
  if (!css.includes(text)) {
    console.error(`site.css missing new arrivals lightbox style: ${text}`);
    process.exit(1);
  }
}

console.log("Preview content checks passed.");
