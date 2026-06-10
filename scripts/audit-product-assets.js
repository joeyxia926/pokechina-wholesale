const fs = require("fs");

const BAD_HOSTS = [
  "reddit.com",
  "bestbuy.com",
  "deviantart.com",
  "rti.group",
  "storage.googleapis.com",
  "bombayartisanco.com",
  "universe.oneone.com.tw",
  "solacido.com",
  "kantoforge.com",
  "atsbullion.com",
];

const GENERIC_TITLE_PATTERNS = [
  /pagina \d/i,
  /products\s*-/i,
  /customer reviews/i,
  /one piece/i,
  /evolving skies/i,
  /brilliant stars/i,
  /terastal festival/i,
  /stellar crown/i,
  /travel gift box -/i,
  /eevee gx gift box/i,
];

const STOP = new Set([
  "pokemon",
  "pokémon",
  "chinese",
  "tcg",
  "box",
  "gift",
  "set",
  "booster",
  "card",
  "cards",
  "loose",
  "boxes",
  "sealed",
  "simplified",
  "product",
]);

function tokens(value) {
  return value
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((token) => token.length > 2 && !STOP.has(token));
}

function matchRatio(productName, asset) {
  const nameTokens = tokens(productName);
  const haystack = `${asset.sourceTitle || ""} ${asset.sourceUrl || ""} ${asset.imageUrl || ""}`.toLowerCase();
  if (!nameTokens.length) return 1;
  return nameTokens.filter((token) => haystack.includes(token)).length / nameTokens.length;
}

function isReliable(productName, asset) {
  if (!asset.imageUrl || !asset.sourceHost) return false;
  const host = asset.sourceHost.replace(/^www\./, "");
  if (asset.official || host.includes("pokemon.cn")) return true;
  const title = asset.sourceTitle || "";
  const ratio = matchRatio(productName, asset);
  const hasCode = (productName.match(/^[A-Z0-9.]+C?:/) || [])[0]?.replace(":", "").toLowerCase();
  const haystack = `${title} ${asset.sourceUrl || ""} ${asset.imageUrl || ""}`.toLowerCase();

  if (BAD_HOSTS.some((badHost) => host.includes(badHost))) return false;
  if (GENERIC_TITLE_PATTERNS.some((pattern) => pattern.test(title))) return false;
  if (hasCode && haystack.includes(hasCode)) return true;
  if (ratio >= 0.5) return true;
  if (ratio >= 0.4 && /cardtrader|card-binder|pokeunlimited|pokewayne|sammelspot|majinstore|maxgaming|1collectibles|krystalkollectz|sunnysidecardhouse|kelscollectibles|lamas-store|omegabuddy/i.test(host)) return true;
  return false;
}

const assetsPath = "product-assets.json";
const assets = JSON.parse(fs.readFileSync(assetsPath, "utf8"));
const rejected = [];

for (const [name, asset] of Object.entries(assets)) {
  if (!isReliable(name, asset)) {
    rejected.push({
      name,
      host: asset.sourceHost || "",
      title: asset.sourceTitle || "",
      ratio: matchRatio(name, asset),
    });
    assets[name] = {
      imageUrl: "",
      imageAlt: `${name.replace(/:/g, "")} Chinese Pokemon wholesale product image`,
      sourceUrl: "",
      sourceTitle: "Needs manual official image review; using generated catalog placeholder",
      sourceHost: "",
    };
  }
}

fs.writeFileSync(assetsPath, JSON.stringify(assets, null, 2));
fs.writeFileSync("product-assets-rejected.json", JSON.stringify(rejected, null, 2));
console.log(`Rejected ${rejected.length} low-confidence assets. Wrote product-assets-rejected.json.`);
