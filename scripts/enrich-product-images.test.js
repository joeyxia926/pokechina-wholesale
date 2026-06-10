const assert = require("assert");
const {
  buildSearchPlans,
  chooseBestImage,
  generateAltText,
  parseCsv,
} = require("./enrich-product-images");

const rows = parseCsv("product_name\nCBB1C: Gem Pack Vol. 1 Booster Box\n");
assert.strictEqual(rows[0].product_name, "CBB1C: Gem Pack Vol. 1 Booster Box");

const plans = buildSearchPlans("CBB1C: Gem Pack Vol. 1 Booster Box", [
  "example-distributor.com",
]);
assert.ok(plans.some((plan) => plan.source === "google_images"));
assert.ok(plans.some((plan) => plan.query.includes("site:pokemon.cn")));
assert.ok(plans.some((plan) => plan.query.includes("site:example-distributor.com")));

const best = chooseBestImage([
  { url: "https://example.com/small.jpg", width: 300, height: 300, source: "google_images" },
  { url: "https://www.pokemon.cn/product-large.jpg", width: 1200, height: 1200, source: "pokemon_china" },
]);
assert.strictEqual(best.url, "https://www.pokemon.cn/product-large.jpg");

assert.strictEqual(
  generateAltText("CBB1C: Gem Pack Vol. 1 Booster Box"),
  "CBB1C Gem Pack Vol. 1 Booster Box Chinese Pokemon TCG wholesale product image"
);

console.log("enrich-product-images unit checks passed.");
