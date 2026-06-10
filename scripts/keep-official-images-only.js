const fs = require("fs");

const assets = JSON.parse(fs.readFileSync("product-assets.json", "utf8"));
let removed = 0;

for (const [name, asset] of Object.entries(assets)) {
  if (asset.sourceHost === "pokemon.cn" || asset.official) continue;
  assets[name] = {
    imageUrl: "",
    imageAlt: `${name.replace(/:/g, "")} Chinese Pokemon wholesale product image`,
    sourceUrl: "",
    sourceTitle: "Official product image pending verification; using generated catalog placeholder",
    sourceHost: "",
  };
  removed += 1;
}

fs.writeFileSync("product-assets.json", JSON.stringify(assets, null, 2));
console.log(`Removed ${removed} non-official image assignments.`);
