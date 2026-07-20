const fs = require("fs");

const OFFICIAL = {
  "CSV9C: Stellar Crystal Booster Box": {
    imageUrl: "https://image.pokemon.com.cn/wp-content/uploads/2026/04/71c82def4fc6587c95671d930cb292a1.png?auth_key=1781030917-4ef9c6623fea43819d3f5b183247f108-0-c9d9481e12c74d1618379799903566e7",
    sourceUrl: "https://www.pokemon.cn/tcg/product/21383.html",
    sourceTitle: "星晶绽放，华光焕彩！宝可梦卡牌全新补充包商品“星彩晶璃”即将发售",
  },
  "CSV9C: Stellar Crystal Jumbo Booster Box": {
    imageUrl: "https://image.pokemon.com.cn/wp-content/uploads/2026/04/7fd1989071f577fbbcc86e202583b93d.png?auth_key=1781030917-a136017c46c54a44944198b9df62d859-0-d9d3003954281d94a8aea47221195793",
    sourceUrl: "https://www.pokemon.cn/tcg/product/21383.html",
    sourceTitle: "星晶绽放，华光焕彩！宝可梦卡牌全新补充包商品“星彩晶璃”即将发售",
  },
  "CSV9C: Stellar Crystal Coin Set": {
    imageUrl: "https://image.pokemon.com.cn/wp-content/uploads/2026/04/f8d1bc3553df8d0e67f458d6e369b90b.png?auth_key=1781031777-21a38b9c68fd413794996c30c83409be-0-8a650b9ac6869c6d232c42944aa68f0e",
    sourceUrl: "https://www.pokemon.cn/tcg/product/21409.html",
    sourceTitle: "星晶绽放，华光焕彩！内含全新补充包“星彩晶璃”的硬币套装及更多商品即将发售",
  },
  "Teal Mask Ogerpon Gift Box": {
    imageUrl: "https://image.pokemon.com.cn/wp-content/uploads/2026/04/760c94c48f4ba83074c66019728016eb.png?auth_key=1781024507-07c27a7920b94d65bfcb103565ca4cbf-0-e6e7d99d1b0ac4b87c226678a9155035",
    sourceUrl: "https://www.pokemon.cn/tcg/product/19697.html",
    sourceTitle: "相约北上乡，奇遇共欢畅！宝可梦卡牌厄诡椪礼盒即将发售",
  },
  "Hearthflame Mask Ogerpon Gift Box": {
    imageUrl: "https://image.pokemon.com.cn/wp-content/uploads/2026/04/2bc9ef5b36fc9be3d768136ed8e33116.png?auth_key=1781024507-702cb1aee5c84d5aaa60f176df9d7e50-0-40fb7ac38b83ae438482ea7fc670f6b2",
    sourceUrl: "https://www.pokemon.cn/tcg/product/19697.html",
    sourceTitle: "相约北上乡，奇遇共欢畅！宝可梦卡牌厄诡椪礼盒即将发售",
  },
  "Wellspring Mask Ogerpon Gift Box": {
    imageUrl: "https://image.pokemon.com.cn/wp-content/uploads/2026/04/ba7c8558ae07637b14ae4ce3f2ce7949.png?auth_key=1781024507-d8ac021abe2241ee9fed929d92dd81dd-0-598b2fad477a3d40aa210d34f49db8be",
    sourceUrl: "https://www.pokemon.cn/tcg/product/19697.html",
    sourceTitle: "相约北上乡，奇遇共欢畅！宝可梦卡牌厄诡椪礼盒即将发售",
  },
  "Cornerstone Mask Ogerpon Gift Box": {
    imageUrl: "https://image.pokemon.com.cn/wp-content/uploads/2026/04/9337e7cd697b846ade11c0319a850db1.png?auth_key=1781024507-7e8b9366102e4b32b6452c3c3bc2e7b9-0-fb8ebdedd3f83d9cfe89610f6eb79db7",
    sourceUrl: "https://www.pokemon.cn/tcg/product/19697.html",
    sourceTitle: "相约北上乡，奇遇共欢畅！宝可梦卡牌厄诡椪礼盒即将发售",
  },
  "2026 Dragon Boat Festival Gift Box": {
    imageUrl: "https://image.pokemon.com.cn/wp-content/uploads/2026/04/c5e1b185a52883120cdc425f277c849f.png?auth_key=1781002515-26faa046c08941ceaba307b85c5ba800-0-755306c1ec58562c8416c3f795bcd77f",
    sourceUrl: "https://www.pokemon.cn/tcg/product/21505.html",
    sourceTitle: "艾草飘香迎端午，好运“粽”来送祝福 2026年端午礼盒即将发售",
  },
  "Dream Painting Collection Water Figure Set": {
    imageUrl: "https://image.pokemon.com.cn/wp-content/uploads/2026/04/ce1e4fbabca9b51a0849bd8ef59e04dc.png?auth_key=1781031776-da6b445579054e67aad95530cdd61c14-0-346568b605971e9483f518dfefd91e2e",
    sourceUrl: "https://www.pokemon.cn/tcg/product/20463.html",
    sourceTitle: "妙手点睛，绘梦成真！绘梦点睛水生态手办套装即将发售",
  },
  "CBB5C: Gem Pack Vol. 5 Booster Box": {
    imageUrl: "https://image.pokemon.com.cn/wp-content/uploads/2026/03/91faa6ff8dceed8a88685710e35147f3.png?auth_key=1781031729-a4d837b0d9134ff08f24be0006b36c34-0-70e0581059d0f43d6b8e78f085777ab5",
    sourceUrl: "https://www.pokemon.cn/tcg/product/21078.html",
    sourceTitle: "乘风破浪，寻梦逐宝！Pokémon宝石包第五弹即将发售",
  },
  "CBB5C: Gem Pack Vol. 5 Booster Box-Loose Boxes": {
    imageUrl: "https://image.pokemon.com.cn/wp-content/uploads/2026/03/91faa6ff8dceed8a88685710e35147f3.png?auth_key=1781031729-a4d837b0d9134ff08f24be0006b36c34-0-70e0581059d0f43d6b8e78f085777ab5",
    sourceUrl: "https://www.pokemon.cn/tcg/product/21078.html",
    sourceTitle: "乘风破浪，寻梦逐宝！Pokémon宝石包第五弹即将发售",
  },
  "CBB4C: Gem Pack Vol. 4 Booster Box": {
    imageUrl: "https://image.pokemon.com.cn/wp-content/uploads/2026/01/20260109114405480.png?auth_key=1781037557-c5a4bfea208b4b7fae5b98111d53e3b3-0-7998599b5e99abea31042c6d8c7241a2",
    sourceUrl: "https://www.pokemon.cn/tcg/product/20382.html",
    sourceTitle: "春风得意，开怀纳宝 Pokémon宝石包第四弹即将发售！",
  },
  "Gem Pack Badge Set": {
    imageUrl: "https://image.pokemon.com.cn/wp-content/uploads/2025/12/20251225193128671.png?auth_key=1781038734-23af277276424d1599f627d7c2ad0414-0-45a92a90b3619983874f899d4d6f95a2",
    sourceUrl: "https://www.pokemon.cn/tcg/product/19753.html",
    sourceTitle: "萌力闪耀，如获至宝！宝石包徽章套装即将发售",
  },
  "2026 Pokemon Lunar New Year Gift Box": {
    imageUrl: "https://image.pokemon.com.cn/wp-content/uploads/2025/12/20251225192813528.png?auth_key=1781030213-ee5a7550c68b488e8ccabe9caef7bfeb-0-2b2c4e9d6af2588ea90bf795f56a6dca",
    sourceUrl: "https://www.pokemon.cn/tcg/product/20170.html",
    sourceTitle: "辞旧迎新年，好礼贺团圆！全新新春礼盒即将发售",
  },
  "Pokemon S-Chinese30th Anniv First Partner Holo CardSet Vol.l Sealed": {
    imageUrl: "https://image.pokemon.com.cn/wp-content/uploads/2026/02/9d2efa955feb1253a2ef2f4c1bca9b62.png?auth_key=1781035021-555d8512a0fd41259e1083a3c9ae9c17-0-0f09e9db4a7b9b10aab23a66be35065a",
    sourceUrl: "https://www.pokemon.cn/tcg/product/20725.html",
    sourceTitle: "30周年庆典 最初的伙伴特别插画闪卡套装 Vol.1即将发售",
  },
  "Pokemon S-Chinese30th Anniv First Partner Holo CardSet Vol.l Sealed-ONE BOX": {
    imageUrl: "https://image.pokemon.com.cn/wp-content/uploads/2026/02/9d2efa955feb1253a2ef2f4c1bca9b62.png?auth_key=1781035021-555d8512a0fd41259e1083a3c9ae9c17-0-0f09e9db4a7b9b10aab23a66be35065a",
    sourceUrl: "https://www.pokemon.cn/tcg/product/20725.html",
    sourceTitle: "30周年庆典 最初的伙伴特别插画闪卡套装 Vol.1即将发售",
  },
  "CS3.5C: Scorching Skies Booster Box": {
    imageUrl: "https://image.pokemon.com.cn/wp-content/uploads/2026/02/674556bb0c30278f16ba2b703970e278.png?auth_key=1781027492-5f6f2e10deef4276a7ed561b909a8624-0-1445f1719aa2214825ef2193536581f8",
    sourceUrl: "https://www.pokemon.cn/tcg/product/20627.html",
    sourceTitle: "流虹逐丽影，诡像传奇谭！宝可梦卡牌全新补充包商品“璀璨诡幻”及套装商品即将发售！",
  },
};

const assets = JSON.parse(fs.readFileSync("product-assets.json", "utf8"));
for (const [name, override] of Object.entries(OFFICIAL)) {
  assets[name] = {
    ...override,
    imageAlt: `${name.replace(/:/g, "")} official Chinese Pokemon product image`,
    sourceHost: "pokemon.cn",
    official: true,
  };
}
fs.writeFileSync("product-assets.json", JSON.stringify(assets, null, 2));
console.log(`Applied ${Object.keys(OFFICIAL).length} official Pokemon China image overrides.`);
