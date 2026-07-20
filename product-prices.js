// Generated from new-product-list.xlsx on 2026-07-19.
// Display prices use CASE/USD only. Do not publish shipping amounts because shipping varies by destination.
(function () {
  const normalizeProductName = (name) => String(name || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/Pok?mon/gi, "Pokemon")
    .replace(/[?(].*?[?)]/g, " ")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

  const productPrices = {
  "csm2ac shining synergy shower booster box": {
    "name": "CSM2aC: Shining Synergy - Shower Booster Box（Sold as a 3-carton set）",
    "caseQuantity": 12,
    "caseUsd": 3874.88,
    "displayPrice": "$3,874.88",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csm2bc shining synergy supreme booster box": {
    "name": "CSM2bC: Shining Synergy - Supreme Booster Box（Sold as a 3-carton set）",
    "caseQuantity": 12,
    "caseUsd": 3874.88,
    "displayPrice": "$3,874.88",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csm2cc shining synergy summon booster box": {
    "name": "CSM2cC: Shining Synergy - Summon Booster Box（Sold as a 3-carton set）",
    "caseQuantity": 12,
    "caseUsd": 3874.88,
    "displayPrice": "$3,874.88",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csm2 5c striking competition booster box": {
    "name": "CSM2.5C: Striking Competition Booster Box",
    "caseQuantity": 12,
    "caseUsd": 1602.95,
    "displayPrice": "$1,602.95",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs1ac dynamax clash thunder booster box": {
    "name": "CS1aC: Dynamax Clash - Thunder Booster Box",
    "caseQuantity": 12,
    "caseUsd": 610.34,
    "displayPrice": "$610.34",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs1bc dynamax clash flame booster box": {
    "name": "CS1bC: Dynamax Clash - Flame Booster Box",
    "caseQuantity": 12,
    "caseUsd": 451.52,
    "displayPrice": "$451.52",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs2ac vivid portrayals obsidian booster box": {
    "name": "CS2aC: Vivid Portrayals - Obsidian Booster Box（Sold as a 2-carton pair）",
    "caseQuantity": 12,
    "caseUsd": 362.19,
    "displayPrice": "$362.19",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs2bc vivid portrayals indigo booster box": {
    "name": "CS2bC: Vivid Portrayals - Indigo Booster Box（Sold as a 2-carton pair）",
    "caseQuantity": 12,
    "caseUsd": 362.19,
    "displayPrice": "$362.19",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs3ac primordial arts overgrow booster box": {
    "name": "CS3aC: Primordial Arts - Overgrow Booster Box",
    "caseQuantity": 10,
    "caseUsd": 511.08,
    "displayPrice": "$511.08",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs3ac primordial arts overgrow jumbo booster box": {
    "name": "CS3aC: Primordial Arts - Overgrow jumbo Booster Box（Sold as a 2-carton pair）",
    "caseQuantity": 24,
    "caseUsd": 659.97,
    "displayPrice": "$659.97",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs3bc primordial arts torrent booster box": {
    "name": "CS3bC: Primordial Arts - Torrent Booster Box",
    "caseQuantity": 10,
    "caseUsd": 511.08,
    "displayPrice": "$511.08",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs3bc primordial arts torrent jumbo booster box": {
    "name": "CS3bC: Primordial Arts - Torrent Jumbo Booster Box（Sold as a 2-carton pair）",
    "caseQuantity": 24,
    "caseUsd": 659.97,
    "displayPrice": "$659.97",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs3 5c scorching skies booster box": {
    "name": "CS3.5C: Scorching Skies Booster Box",
    "caseQuantity": 20,
    "caseUsd": 524.37,
    "displayPrice": "$524.37",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs4ac nine colors gathering friends booster box": {
    "name": "CS4aC: Nine Colors Gathering - Friends Booster Box",
    "caseQuantity": 15,
    "caseUsd": 2165.44,
    "displayPrice": "$2,165.44",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs4ac nine colors gathering friends jumbo booster box": {
    "name": "CS4aC: Nine Colors Gathering - Friends jumbo Booster Box",
    "caseQuantity": 20,
    "caseUsd": 3982.27,
    "displayPrice": "$3,982.27",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs4bc nine colors gathering origin booster box": {
    "name": "CS4bC: Nine Colors Gathering - Origin Booster Box",
    "caseQuantity": 15,
    "caseUsd": 1131.46,
    "displayPrice": "$1,131.46",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs4bc nine colors gathering origin jumbo booster box": {
    "name": "CS4bC: Nine Colors Gathering - Origin jumbo Booster Box",
    "caseQuantity": 20,
    "caseUsd": 1732.35,
    "displayPrice": "$1,732.35",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs4 5c final flame dance booster box": {
    "name": "CS4.5C: Final Flame Dance Booster Box",
    "caseQuantity": 20,
    "caseUsd": 558.35,
    "displayPrice": "$558.35",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs5ac brave stars charm jumbo booster box": {
    "name": "CS5aC: Brave Stars - Charm Jumbo Booster Box（Sold as a 2-carton pair）",
    "caseQuantity": 20,
    "caseUsd": 676.51,
    "displayPrice": "$676.51",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs5bc brave stars brave booster box": {
    "name": "CS5bC: Brave Stars - Brave Booster Box",
    "caseQuantity": 15,
    "caseUsd": 610.34,
    "displayPrice": "$610.34",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs5bc brave stars brave jumbo booster box": {
    "name": "CS5bC: Brave Stars - Brave Jumbo Booster Box（Sold as a 2-carton pair）",
    "caseQuantity": 20,
    "caseUsd": 676.51,
    "displayPrice": "$676.51",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs5 5c shadow of glory booster box": {
    "name": "CS5.5C: Shadow of Glory Booster Box",
    "caseQuantity": 20,
    "caseUsd": 775.78,
    "displayPrice": "$775.78",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs6ac azure shadow roar booster box": {
    "name": "CS6aC: Azure Shadow - Roar Booster Box",
    "caseQuantity": 15,
    "caseUsd": 759.23,
    "displayPrice": "$759.23",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs6ac azure shadow roar jumbo booster box": {
    "name": "CS6aC: Azure Shadow - Roar Jumbo Booster Box",
    "caseQuantity": 20,
    "caseUsd": 1106.65,
    "displayPrice": "$1,106.65",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs6bc azure shadow pursuit booster box": {
    "name": "CS6bC: Azure Shadow - Pursuit Booster Box",
    "caseQuantity": 15,
    "caseUsd": 982.57,
    "displayPrice": "$982.57",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs6bc azure shadow pursuit jumbo booster box": {
    "name": "CS6bC: Azure Shadow - Pursuit Jumbo Booster Box",
    "caseQuantity": 20,
    "caseUsd": 2264.7,
    "displayPrice": "$2,264.70",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs6 5c victory star guide booster box": {
    "name": "CS6.5C: Victory Star Guide Booster Box",
    "caseQuantity": 20,
    "caseUsd": 858.49,
    "displayPrice": "$858.49",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv1c eternal birth booster box": {
    "name": "CSV1C: Eternal Birth Booster Box",
    "caseQuantity": 15,
    "caseUsd": 672.38,
    "displayPrice": "$672.38",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv1c eternal birth jumbo booster box": {
    "name": "CSV1C: Eternal Birth Jumbo Booster Box",
    "caseQuantity": 12,
    "caseUsd": 610.34,
    "displayPrice": "$610.34",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv2c miracle journey booster box": {
    "name": "CSV2C: Miracle Journey Booster Box",
    "caseQuantity": 15,
    "caseUsd": 759.23,
    "displayPrice": "$759.23",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv2c miracle journey jumbo booster box": {
    "name": "CSV2C: Miracle Journey Jumbo Booster Box",
    "caseQuantity": 12,
    "caseUsd": 689.75,
    "displayPrice": "$689.75",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv3c fearless terastal booster box": {
    "name": "CSV3C: Fearless Terastal Booster Box",
    "caseQuantity": 15,
    "caseUsd": 1123.19,
    "displayPrice": "$1,123.19",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv4c bonus round booster box": {
    "name": "CSV4C: Bonus Round Booster Box",
    "caseQuantity": 20,
    "caseUsd": 417.13,
    "displayPrice": "$417.13",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv4c bonus round jumbo booster box": {
    "name": "CSV4C: Bonus Round Jumbo Booster Box",
    "caseQuantity": 12,
    "caseUsd": 436.63,
    "displayPrice": "$436.63",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv5c dark crystal blaze booster box": {
    "name": "CSV5C: Dark Crystal Blaze Booster Box",
    "caseQuantity": 20,
    "caseUsd": 305.17,
    "displayPrice": "$305.17",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv5c dark crystal blaze jumbo booster box": {
    "name": "CSV5C: Dark Crystal Blaze Jumbo Booster Box",
    "caseQuantity": 12,
    "caseUsd": 359.23,
    "displayPrice": "$359.23",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv6c true mystery booster box": {
    "name": "CSV6C: True Mystery Booster Box",
    "caseQuantity": 20,
    "caseUsd": 262.92,
    "displayPrice": "$262.92",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv7c blade awakening booster box": {
    "name": "CSV7C: Blade Awakening Booster Box",
    "caseQuantity": 20,
    "caseUsd": 293.06,
    "displayPrice": "$293.06",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv7c blade awakening jumbo booster box": {
    "name": "CSV7C: Blade Awakening Jumbo Booster Box",
    "caseQuantity": 12,
    "caseUsd": 279.47,
    "displayPrice": "$279.47",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv8c brilliant fantasy booster box": {
    "name": "CSV8C: Brilliant Fantasy Booster Box",
    "caseQuantity": 20,
    "caseUsd": 276.51,
    "displayPrice": "$276.51",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv8c brilliant fantasy jumbo booster box": {
    "name": "CSV8C: Brilliant Fantasy Jumbo Booster Box",
    "caseQuantity": 12,
    "caseUsd": 287.74,
    "displayPrice": "$287.74",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv9c stellar crystal booster box": {
    "name": "CSV9C: Stellar Crystal Booster Box",
    "caseQuantity": 20,
    "caseUsd": 408.86,
    "displayPrice": "$408.86",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv9c stellar crystal jumbo booster box": {
    "name": "CSV9C: Stellar Crystal Jumbo Booster Box",
    "caseQuantity": 12,
    "caseUsd": 764.55,
    "displayPrice": "$764.55",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv9 5c terastal gathering booster box": {
    "name": "CSV9.5C: Terastal Gathering Booster Box",
    "caseQuantity": 20,
    "caseUsd": 1509.6,
    "displayPrice": "$1,509.60",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cbb1c gem pack vol 1 booster box": {
    "name": "CBB1C: Gem Pack Vol. 1 Booster Box",
    "caseQuantity": 20,
    "caseUsd": 2033.09,
    "displayPrice": "$2,033.09",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cbb2c gem pack vol 2 booster box": {
    "name": "CBB2C: Gem Pack Vol. 2 Booster Box",
    "caseQuantity": 20,
    "caseUsd": 1338.26,
    "displayPrice": "$1,338.26",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cbb3c gem pack vol 3 booster box": {
    "name": "CBB3C: Gem Pack Vol. 3 Booster Box",
    "caseQuantity": 20,
    "caseUsd": 1851.11,
    "displayPrice": "$1,851.11",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cbb4c gem pack vol 4 booster box": {
    "name": "CBB4C: Gem Pack Vol. 4 Booster Box",
    "caseQuantity": 20,
    "caseUsd": 387,
    "displayPrice": "$387.00",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cbb5c gem pack vol 5 booster box": {
    "name": "CBB5C: Gem Pack Vol. 5 Booster Box（40 boxes）",
    "caseQuantity": 20,
    "caseUsd": 1283.31,
    "displayPrice": "$1,283.31",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "151c collect 151 hope jumbo booster box": {
    "name": "151C: Collect 151 Hope jumbo Booster Box",
    "caseQuantity": 20,
    "caseUsd": 1966.91,
    "displayPrice": "$1,966.91",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "151c collect 151 surprises jumbo booster box": {
    "name": "151C: Collect 151 Surprises jumbo Booster Box",
    "caseQuantity": 20,
    "caseUsd": 4067.95,
    "displayPrice": "$4,067.95",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "151c collect 151 gathering booster box": {
    "name": "151C: Collect 151 Gathering Booster Box",
    "caseQuantity": 20,
    "caseUsd": 1586.41,
    "displayPrice": "$1,586.41",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv10c chasing glory together booster box": {
    "name": "CSV10C: Chasing Glory Together Booster Box",
    "caseQuantity": 20,
    "caseUsd": 456.43,
    "displayPrice": "$456.43",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv10c chasing glory together jumbo booster box": {
    "name": "CSV10C: Chasing Glory Together Jumbo Booster Box",
    "caseQuantity": 12,
    "caseUsd": 864.11,
    "displayPrice": "$864.11",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "pokemon tcg golden energy gift box": {
    "name": "Pokémon TCG Golden Energy Gift Box",
    "caseQuantity": 10,
    "caseUsd": 2330.87,
    "displayPrice": "$2,330.87",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "golden energy advanced gift box tapu koko": {
    "name": "Golden Energy Advanced Gift Box - Tapu Koko",
    "caseQuantity": 7,
    "caseUsd": 1751.85,
    "displayPrice": "$1,751.85",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "golden energy advanced gift box tapu lele": {
    "name": "Golden Energy Advanced Gift Box - Tapu Lele",
    "caseQuantity": 7,
    "caseUsd": 1751.85,
    "displayPrice": "$1,751.85",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "golden energy advanced gift box tapu bulu": {
    "name": "Golden Energy Advanced Gift Box - Tapu Bulu",
    "caseQuantity": 7,
    "caseUsd": 1751.85,
    "displayPrice": "$1,751.85",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "golden energy advanced gift box tapu fini": {
    "name": "Golden Energy Advanced Gift Box - Tapu Fini",
    "caseQuantity": 7,
    "caseUsd": 1751.85,
    "displayPrice": "$1,751.85",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "pokemon card display set gift box eevee": {
    "name": "Pokémon Card Display Set Gift Box Eevee",
    "caseQuantity": 48,
    "caseUsd": 966.03,
    "displayPrice": "$966.03",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "radiant energy gift box zacian": {
    "name": "Radiant energy gift box zacian",
    "caseQuantity": 12,
    "caseUsd": 1237.81,
    "displayPrice": "$1,237.81",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "radiant energy gift box zamazenta": {
    "name": "Radiant energy gift box zamazenta",
    "caseQuantity": 12,
    "caseUsd": 1237.81,
    "displayPrice": "$1,237.81",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "radiant energy gift box eternatus": {
    "name": "Radiant energy gift box eternatus",
    "caseQuantity": 12,
    "caseUsd": 1237.81,
    "displayPrice": "$1,237.81",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "pokemon card display set gift box charizard": {
    "name": "Pokémon Card Display Set Gift Box Charizard",
    "caseQuantity": 48,
    "caseUsd": 800.59,
    "displayPrice": "$800.59",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "pokemon card display set gift box gengar": {
    "name": "Pokémon Card Display Set Gift Box Gengar",
    "caseQuantity": 48,
    "caseUsd": 967.68,
    "displayPrice": "$967.68",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "radiant energy gift box grass": {
    "name": "Radiant Energy Gift Box Grass",
    "caseQuantity": 12,
    "caseUsd": 651.7,
    "displayPrice": "$651.70",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "radiant energy gift box lightning": {
    "name": "Radiant Energy Gift Box Lightning",
    "caseQuantity": 12,
    "caseUsd": 643.43,
    "displayPrice": "$643.43",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "radiant energy gift box metal": {
    "name": "Radiant Energy Gift Box Metal",
    "caseQuantity": 12,
    "caseUsd": 651.7,
    "displayPrice": "$651.70",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "pikachu and eevee quicksand card display pendant gift box": {
    "name": "Pikachu & Eevee Quicksand Card Display Pendant Gift Box",
    "caseQuantity": 32,
    "caseUsd": 1047.56,
    "displayPrice": "$1,047.56",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "collect 151 pokemon card holder set": {
    "name": "Collect 151 Pokémon Card Holder Set",
    "caseQuantity": 12,
    "caseUsd": 147.12,
    "displayPrice": "$147.12",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "151c collect 151 hope coin set": {
    "name": "151C: Collect 151 Hope Coin Set",
    "caseQuantity": 12,
    "caseUsd": 135.89,
    "displayPrice": "$135.89",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "2025 dragon boat festival gift box": {
    "name": "2025 Dragon Boat Festival Gift Box",
    "caseQuantity": 12,
    "caseUsd": 676.51,
    "displayPrice": "$676.51",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "scarlet and violet chinese tin collection box": {
    "name": "Scarlet & Violet Chinese Tin Collection Box",
    "caseQuantity": 40,
    "caseUsd": 1239,
    "displayPrice": "$1,239.00",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "scarlet and violet chinese sleeve collection box": {
    "name": "Scarlet & Violet Chinese Sleeve Collection Box",
    "caseQuantity": 40,
    "caseUsd": 1172.82,
    "displayPrice": "$1,172.82",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "adventure collection gift box venusaur": {
    "name": "Adventure Collection Gift Box: Venusaur",
    "caseQuantity": 12,
    "caseUsd": 2000,
    "displayPrice": "$2,000.00",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "adventure collection gift box charizard": {
    "name": "Adventure Collection Gift Box: Charizard",
    "caseQuantity": 12,
    "caseUsd": 2000,
    "displayPrice": "$2,000.00",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "adventure collection gift box blastoise": {
    "name": "Adventure Collection Gift Box: Blastoise",
    "caseQuantity": 12,
    "caseUsd": 1900.74,
    "displayPrice": "$1,900.74",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "adventure collection gift box gardevoir": {
    "name": "Adventure Collection Gift Box: Gardevoir",
    "caseQuantity": 12,
    "caseUsd": 1722.07,
    "displayPrice": "$1,722.07",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "illustration rare metal deck box set": {
    "name": "Illustration Rare Metal Deck Box Set",
    "caseQuantity": 12,
    "caseUsd": 610.34,
    "displayPrice": "$610.34",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "151c collect 151 surprises coin set": {
    "name": "151C: Collect 151 Surprises Coin Set",
    "caseQuantity": 12,
    "caseUsd": 238.11,
    "displayPrice": "$238.11",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "151c collect 151 the first partner display set bulbasaur": {
    "name": "151C: Collect 151 The First Partner Display Set Bulbasaur",
    "caseQuantity": 80,
    "caseUsd": 938.26,
    "displayPrice": "$938.26",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "151c collect 151 the first partner display set charmander loose box": {
    "name": "151C: Collect 151 The First Partner Display Set Charmander-loose box",
    "caseQuantity": 80,
    "caseUsd": 1004.43,
    "displayPrice": "$1,004.43",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "151c collect 151 the first partner display set squirtle": {
    "name": "151C: Collect 151 The First Partner Display Set Squirtle",
    "caseQuantity": 80,
    "caseUsd": 938.26,
    "displayPrice": "$938.26",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "2025 mid autumn festival gift box": {
    "name": "2025 Mid-Autumn Festival Gift Box",
    "caseQuantity": 12,
    "caseUsd": 676.51,
    "displayPrice": "$676.51",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "collect 151 first partner premium gift box squirtle": {
    "name": "Collect 151: First Partner Premium Gift Box Squirtle(Sold as a 3-carton set)",
    "caseQuantity": 8,
    "caseUsd": 1227.97,
    "displayPrice": "$1,227.97",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "collect 151 first partner premium gift box charmander": {
    "name": "Collect 151: First Partner Premium Gift Box Charmander(Sold as a 3-carton set)",
    "caseQuantity": 8,
    "caseUsd": 1227.97,
    "displayPrice": "$1,227.97",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "collect 151 first partner premium gift box bulbasaur": {
    "name": "Collect 151: First Partner Premium Gift Box Bulbasaur(Sold as a 3-carton set）",
    "caseQuantity": 8,
    "caseUsd": 1227.97,
    "displayPrice": "$1,227.97",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "151c collect 151 gathering coin set": {
    "name": "151C: Collect 151 Gathering Coin Set",
    "caseQuantity": 12,
    "caseUsd": 123.96,
    "displayPrice": "$123.96",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "collect 151 jigsaw magnet set": {
    "name": "Collect 151 Jigsaw Magnet Set",
    "caseQuantity": 80,
    "caseUsd": null,
    "displayPrice": "Contact for current quote",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csvl2c travel collection damage counter case peripheral gift box": {
    "name": "CSVL2C: Travel Collection Damage Counter Case Peripheral Gift Box",
    "caseQuantity": 40,
    "caseUsd": 607.39,
    "displayPrice": "$607.39",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csvl2c greninja travel gift box": {
    "name": "CSVL2C: Greninja Travel Gift Box",
    "caseQuantity": 12,
    "caseUsd": 1401.48,
    "displayPrice": "$1,401.48",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csvl2c iron hands travel gift box": {
    "name": "CSVL2C: Iron Hands Travel Gift Box",
    "caseQuantity": 12,
    "caseUsd": 1401.48,
    "displayPrice": "$1,401.48",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csvl2c mew travel gift box": {
    "name": "CSVL2C: Mew Travel Gift Box",
    "caseQuantity": 12,
    "caseUsd": 1361.77,
    "displayPrice": "$1,361.77",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csvl2c charizard travel gift box": {
    "name": "CSVL2C: Charizard Travel Gift Box",
    "caseQuantity": 12,
    "caseUsd": 1401.48,
    "displayPrice": "$1,401.48",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "3rd simplified chinese anniversary travel journey gift box": {
    "name": "3rd Simplified Chinese Anniversary Travel Journey Gift Box",
    "caseQuantity": 6,
    "caseUsd": 2344.46,
    "displayPrice": "$2,344.46",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "dream painting collection 151 figure set": {
    "name": "Dream Painting Collection 151 Figure Set",
    "caseQuantity": 12,
    "caseUsd": 759.23,
    "displayPrice": "$759.23",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "electric plush display gift box": {
    "name": "Electric Plush Display Gift Box",
    "caseQuantity": 24,
    "caseUsd": 577.25,
    "displayPrice": "$577.25",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv7c blade awakening coin set": {
    "name": "CSV7C: Blade Awakening Coin Set",
    "caseQuantity": 180,
    "caseUsd": 941.21,
    "displayPrice": "$941.21",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "2026 pokemon lunar new year gift box": {
    "name": "2026 Pokémon Lunar New Year Gift Box",
    "caseQuantity": 12,
    "caseUsd": 287.74,
    "displayPrice": "$287.74",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "gem pack badge set": {
    "name": "Gem Pack Badge Set",
    "caseQuantity": 120,
    "caseUsd": 1520.24,
    "displayPrice": "$1,520.24",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv8c brilliant fantasy coin set": {
    "name": "CSV8C: Brilliant Fantasy Coin Set",
    "caseQuantity": 180,
    "caseUsd": 560.71,
    "displayPrice": "$560.71",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "30th anniversary celebration simplified chinese original partner card set vol 1": {
    "name": "30th Anniversary Celebration Simplified Chinese: Original Partner Card Set Vol.1",
    "caseQuantity": 64,
    "caseUsd": 615.66,
    "displayPrice": "$615.66",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "dream painting collection water figure set": {
    "name": "Dream Painting Collection Water Figure Set",
    "caseQuantity": 48,
    "caseUsd": 436.63,
    "displayPrice": "$436.63",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "2026 dragon boat festival gift box": {
    "name": "2026 Dragon Boat Festival Gift Box",
    "caseQuantity": 12,
    "caseUsd": 196.75,
    "displayPrice": "$196.75",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv9c stellar crystal coin set": {
    "name": "CSV9C: Stellar Crystal Coin Set",
    "caseQuantity": 180,
    "caseUsd": 1023.93,
    "displayPrice": "$1,023.93",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv9 5c terastal gathering tin collection box": {
    "name": "CSV9.5C: Terastal Gathering Tin Collection Box",
    "caseQuantity": 40,
    "caseUsd": 502.81,
    "displayPrice": "$502.81",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv9 5c terastal gathering quicksand card display pendant gift box": {
    "name": "CSV9.5C: Terastal Gathering Quicksand Card Display Pendant Gift Box",
    "caseQuantity": 40,
    "caseUsd": 643.43,
    "displayPrice": "$643.43",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv9 5c terastal gathering eevee and friends gift box one box": {
    "name": "CSV9.5C: Terastal Gathering Eevee & Friends Gift Box One box",
    "caseQuantity": 1,
    "caseUsd": 292.7,
    "displayPrice": "$292.70",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv9 5c terastal gathering badge box": {
    "name": "CSV9.5C: Terastal Gathering Badge Box",
    "caseQuantity": 80,
    "caseUsd": 593.8,
    "displayPrice": "$593.80",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv9 5c terastal gathering coin set l box": {
    "name": "CSV9.5C: Terastal Gathering Coin Set l box",
    "caseQuantity": 80,
    "caseUsd": 560.71,
    "displayPrice": "$560.71",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv9 5c terastal gathering gift box": {
    "name": "CSV9.5C: Terastal Gathering Gift Box",
    "caseQuantity": 6,
    "caseUsd": 461.45,
    "displayPrice": "$461.45",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "30th anniversary celebration simplified chinese original partner card set vol 2": {
    "name": "30th Anniversary Celebration Simplified Chinese: Original Partner Card Set Vol.2",
    "caseQuantity": 64,
    "caseUsd": 425.41,
    "displayPrice": "$425.41",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "sleeping eeveelutions holly box": {
    "name": "Sleeping Eeveelutions- Holly Box",
    "caseQuantity": 9,
    "caseUsd": 44.09,
    "displayPrice": "$44.09",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv10c chasing glory together coin set": {
    "name": "CSV10C: Chasing Glory Together Coin Set",
    "caseQuantity": 180,
    "caseUsd": 201.62,
    "displayPrice": "$201.62",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "ptcg s and vbattlecollection box lillie": {
    "name": "PTCG S&VBattleCollection Box Lillie",
    "caseQuantity": 12,
    "caseUsd": 789.36,
    "displayPrice": "$789.36",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "ptcgbox n s and vbattlecollection": {
    "name": "PTCGBox N\nS&VBattleCollection",
    "caseQuantity": 12,
    "caseUsd": 789.36,
    "displayPrice": "$789.36",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "the glory of team rocket attache case": {
    "name": "The Glory of Team Rocket Attaché Case",
    "caseQuantity": 1,
    "caseUsd": 210.12,
    "displayPrice": "$210.12",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "one piece card game romance dawn opc01": {
    "name": "One Piece Card Game Romance Dawn OPC01",
    "caseQuantity": 12,
    "caseUsd": 469.72,
    "displayPrice": "$469.72",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "riftbound league of legends tcg origins slim booster box": {
    "name": "Riftbound: League of Legends TCG - Origins-Slim Booster Box",
    "caseQuantity": 12,
    "caseUsd": 353.91,
    "displayPrice": "$353.91",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "riftbound league of legends tcg origins thick booster box": {
    "name": "Riftbound: League of Legends TCG - Origins-Thick Booster Box",
    "caseQuantity": 12,
    "caseUsd": 618.61,
    "displayPrice": "$618.61",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "riftbound league of legends tcg chinese spiritforged slim booster box": {
    "name": "Riftbound: League of Legends TCG Chinese-Spiritforged-Slim Booster Box",
    "caseQuantity": 12,
    "caseUsd": 345.64,
    "displayPrice": "$345.64",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "riftbound league of legends tcg chinese spiritforged thick booster box": {
    "name": "Riftbound: League of Legends TCG Chinese-Spiritforged-Thick Booster Box",
    "caseQuantity": 12,
    "caseUsd": 461.45,
    "displayPrice": "$461.45",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "riftbound league of legends tcg unleashed slim booster box": {
    "name": "Riftbound: League of Legends TCG - unleashed-Slim Booster Box",
    "caseQuantity": 12,
    "caseUsd": 345.64,
    "displayPrice": "$345.64",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "riftbound league of legends tcg unleashed thick booster box": {
    "name": "Riftbound: League of Legends TCG - unleashed-Thick Booster Box",
    "caseQuantity": 12,
    "caseUsd": 428.36,
    "displayPrice": "$428.36",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "2026 lunar new year irelia theme gift box riftbound spiritforged": {
    "name": "2026 Lunar New Year Irelia Theme Gift Box Riftbound Spiritforged",
    "caseQuantity": 6,
    "caseUsd": 1255.54,
    "displayPrice": "$1,255.54",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "riftbound league of legends tcg secret garden gift box": {
    "name": "Riftbound: League of Legends TCG - Secret Garden Gift Box",
    "caseQuantity": 10,
    "caseUsd": 461.45,
    "displayPrice": "$461.45",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  }
};

  window.PCW_PRODUCT_PRICES = {
    normalizeProductName,
    byKey: productPrices,
    get(productName) {
      return productPrices[normalizeProductName(productName)] || null;
    }
  };
})();
