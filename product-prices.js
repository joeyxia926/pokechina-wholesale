// Generated from US Box Products Quote Sheet.xlsx on 2026-06-16.
// Display prices use CASE/USD only. Do not publish shipping amounts because shipping varies by destination.
(function () {
  const normalizeProductName = (name) => String(name || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/Pok?mon/g, "Pokemon")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

  const productPrices = {
  "cbb1c: gem pack vol. 1 booster box": {
    "name": "CBB1C: Gem Pack Vol. 1 Booster Box",
    "caseQuantity": 20,
    "caseUsd": 2005.9,
    "displayPrice": "$2,005.90",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cbb2c: gem pack vol. 2 booster box": {
    "name": "CBB2C: Gem Pack Vol. 2 Booster Box",
    "caseQuantity": 20,
    "caseUsd": 1416.9,
    "displayPrice": "$1,416.90",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cbb3c: gem pack vol. 3 booster box": {
    "name": "CBB3C: Gem Pack Vol. 3 Booster Box",
    "caseQuantity": 20,
    "caseUsd": 1707.3,
    "displayPrice": "$1,707.30",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cbb5c: gem pack vol. 5 booster box": {
    "name": "CBB5C: Gem Pack Vol. 5 Booster Box",
    "caseQuantity": 20,
    "caseUsd": 667.7,
    "displayPrice": "$667.70",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cbb5c: gem pack vol. 5 booster box-loose boxes": {
    "name": "CBB5C: Gem Pack Vol. 5 Booster Box-Loose Boxes",
    "caseQuantity": 40,
    "caseUsd": 1103,
    "displayPrice": "$1,103.00",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "gem pack badge set": {
    "name": "Gem Pack Badge Set",
    "caseQuantity": 120,
    "caseUsd": 1497.8,
    "displayPrice": "$1,497.80",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "151c: collect 151 journey booster box": {
    "name": "151C: Collect 151 Journey Booster Box",
    "caseQuantity": 20,
    "caseUsd": null,
    "displayPrice": "Contact for current quote",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "151c: collect 151 gathering booster box": {
    "name": "151C: Collect 151 Gathering Booster Box",
    "caseQuantity": 20,
    "caseUsd": 1807.4,
    "displayPrice": "$1,807.40",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "pokemon card display set gift box eevee": {
    "name": "Pokémon Card Display Set Gift Box Eevee",
    "caseQuantity": 48,
    "caseUsd": 935.6,
    "displayPrice": "$935.60",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "pokemon card display set gift box charizard": {
    "name": "Pokémon Card Display Set Gift Box Charizard",
    "caseQuantity": 48,
    "caseUsd": 772.6,
    "displayPrice": "$772.60",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "pokemon card display set gift box gengar": {
    "name": "Pokémon Card Display Set Gift Box Gengar",
    "caseQuantity": 48,
    "caseUsd": 1123,
    "displayPrice": "$1,123.00",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "vaporeon vmax gift box": {
    "name": "Vaporeon VMAX Gift Box",
    "caseQuantity": 3,
    "caseUsd": 270.7,
    "displayPrice": "$270.70",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "flareon vmax gift box": {
    "name": "Flareon VMAX Gift Box",
    "caseQuantity": 3,
    "caseUsd": 270.7,
    "displayPrice": "$270.70",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "jolteon vmax gift box": {
    "name": "Jolteon VMAX Gift Box",
    "caseQuantity": 3,
    "caseUsd": 270.7,
    "displayPrice": "$270.70",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs6bc: azure shadow - pursuit booster box-loose box": {
    "name": "CS6bC: Azure Shadow - Pursuit Booster Box-loose box",
    "caseQuantity": 15,
    "caseUsd": 927.4,
    "displayPrice": "$927.40",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs6ac: azure shadow - roar booster box-loose box": {
    "name": "CS6aC: Azure Shadow - Roar Booster Box-loose box",
    "caseQuantity": 15,
    "caseUsd": 845.9,
    "displayPrice": "$845.90",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv3c: fearless terastal booster box": {
    "name": "CSV3C: Fearless Terastal Booster Box",
    "caseQuantity": 20,
    "caseUsd": 992.6,
    "displayPrice": "$992.60",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv5c: dark crystal blaze booster box": {
    "name": "CSV5C: Dark Crystal Blaze Booster Box",
    "caseQuantity": 20,
    "caseUsd": 276.3,
    "displayPrice": "$276.30",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv4c: bonus round booster box": {
    "name": "CSV4C: Bonus Round Booster Box",
    "caseQuantity": 20,
    "caseUsd": 427.4,
    "displayPrice": "$427.40",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv7c: blade awakening booster box": {
    "name": "CSV7C: Blade Awakening Booster Box",
    "caseQuantity": 20,
    "caseUsd": 297,
    "displayPrice": "$297.00",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv8c: brilliant fantasy booster box": {
    "name": "CSV8C: Brilliant Fantasy Booster Box",
    "caseQuantity": 20,
    "caseUsd": 313.3,
    "displayPrice": "$313.30",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv5c: dark crystal blaze jumbo booster box": {
    "name": "CSV5C: Dark Crystal Blaze Jumbo Booster Box",
    "caseQuantity": 12,
    "caseUsd": 386.7,
    "displayPrice": "$386.70",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv7c: blade awakening jumbo booster box": {
    "name": "CSV7C: Blade Awakening Jumbo Booster Box",
    "caseQuantity": 12,
    "caseUsd": 340.7,
    "displayPrice": "$340.70",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv4c: bonus round jumbo booster box": {
    "name": "CSV4C: Bonus Round Jumbo Booster Box",
    "caseQuantity": 12,
    "caseUsd": 430.4,
    "displayPrice": "$430.40",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv8c: brilliant fantasy jumbo booster box": {
    "name": "CSV8C: Brilliant Fantasy Jumbo Booster Box",
    "caseQuantity": 12,
    "caseUsd": 340.7,
    "displayPrice": "$340.70",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv3c: fearless terastal jumbo booster box": {
    "name": "CSV3C: Fearless Terastal Jumbo Booster Box",
    "caseQuantity": 12,
    "caseUsd": null,
    "displayPrice": "Contact for current quote",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "151c: collect 151 hope coin set": {
    "name": "151C: Collect 151 Hope Coin Set",
    "caseQuantity": 12,
    "caseUsd": 122.7,
    "displayPrice": "$122.70",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "151c: collect 151 hope coin set ex": {
    "name": "151C: Collect 151 Hope Coin Set ex",
    "caseQuantity": 12,
    "caseUsd": null,
    "displayPrice": "Contact for current quote",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "151c: collect 151 surprises coin set": {
    "name": "151C: Collect 151 Surprises Coin Set",
    "caseQuantity": 12,
    "caseUsd": 230.5,
    "displayPrice": "$230.50",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "151c: collect 151 gathering coin set": {
    "name": "151C: Collect 151 Gathering Coin Set",
    "caseQuantity": 12,
    "caseUsd": 124.3,
    "displayPrice": "$124.30",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "151c: collect 151 gathering coin set ex": {
    "name": "151C: Collect 151 Gathering Coin Set ex",
    "caseQuantity": 12,
    "caseUsd": null,
    "displayPrice": "Contact for current quote",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "illustration rare metal deck box set": {
    "name": "Illustration Rare Metal Deck Box Set",
    "caseQuantity": 48,
    "caseUsd": 1509.2,
    "displayPrice": "$1,509.20",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "151c: collect 151 the first partner display set bulbasaur-loose box": {
    "name": "151C: Collect 151 The First Partner Display Set Bulbasaur-loose box",
    "caseQuantity": 80,
    "caseUsd": 924.4,
    "displayPrice": "$924.40",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "151c: collect 151 the first partner display set charmander-loose box": {
    "name": "151C: Collect 151 The First Partner Display Set Charmander-loose box",
    "caseQuantity": 80,
    "caseUsd": 989.6,
    "displayPrice": "$989.60",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "151c: collect 151 the first partner display set squirtle-loose box": {
    "name": "151C: Collect 151 The First Partner Display Set Squirtle-loose box",
    "caseQuantity": 80,
    "caseUsd": 924.4,
    "displayPrice": "$924.40",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "151 simplified chinese new year 2025 gift box": {
    "name": "151 Simplified Chinese New Year 2025 Gift Box",
    "caseQuantity": 12,
    "caseUsd": null,
    "displayPrice": "Contact for current quote",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "pokemon simplified chinese 2023 1st anniversary gift box": {
    "name": "Pokémon Simplified Chinese 2023 1st Anniversary Gift Box",
    "caseQuantity": 1,
    "caseUsd": 528.1,
    "displayPrice": "$528.10",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "pokemon tcg golden energy gift box": {
    "name": "Pokémon TCG Golden Energy Gift Box",
    "caseQuantity": 1,
    "caseUsd": 263.7,
    "displayPrice": "$263.70",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs4bc: nine colors gathering - origin booster box": {
    "name": "CS4bC: Nine Colors Gathering - Origin Booster Box",
    "caseQuantity": 15,
    "caseUsd": 1152.6,
    "displayPrice": "$1,152.60",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csvl2c: travel collection damage counter case peripheral gift box": {
    "name": "CSVL2C: Travel Collection Damage Counter Case Peripheral Gift Box",
    "caseQuantity": 40,
    "caseUsd": 500.7,
    "displayPrice": "$500.70",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csvl2c: travel battle sleeve peripheral gift box": {
    "name": "CSVL2C: Travel Battle Sleeve Peripheral Gift Box",
    "caseQuantity": 40,
    "caseUsd": 500.7,
    "displayPrice": "$500.70",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csvl2c: greninja travel gift box": {
    "name": "CSVL2C: Greninja Travel Gift Box",
    "caseQuantity": 12,
    "caseUsd": 1380.7,
    "displayPrice": "$1,380.70",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csvl2c: iron hands travel gift box": {
    "name": "CSVL2C: Iron Hands Travel Gift Box",
    "caseQuantity": 12,
    "caseUsd": 1732.7,
    "displayPrice": "$1,732.70",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csvl2c: mew travel gift box": {
    "name": "CSVL2C: Mew Travel Gift Box",
    "caseQuantity": 12,
    "caseUsd": 1400.3,
    "displayPrice": "$1,400.30",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csvl2c: charizard travel gift boxa": {
    "name": "CSVL2C: Charizard Travel Gift Boxa",
    "caseQuantity": 12,
    "caseUsd": 1537.2,
    "displayPrice": "$1,537.20",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "3rd simplified chinese anniversary travel journey gift box": {
    "name": "3rd Simplified Chinese Anniversary Travel Journey Gift Box",
    "caseQuantity": 6,
    "caseUsd": 2358.5,
    "displayPrice": "$2,358.50",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cbb4c: gem pack vol. 4 booster box": {
    "name": "CBB4C: Gem Pack Vol. 4 Booster Box",
    "caseQuantity": 20,
    "caseUsd": 388.1,
    "displayPrice": "$388.10",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "mewtwo vstar collection set gift box": {
    "name": "Mewtwo VSTAR Collection Set Gift Box",
    "caseQuantity": 1,
    "caseUsd": 177.8,
    "displayPrice": "$177.80",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "2026 pokemon lunar new year gift box": {
    "name": "2026 Pokémon Lunar New Year Gift Box",
    "caseQuantity": 12,
    "caseUsd": 202.2,
    "displayPrice": "$202.20",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "riftbound: league of legends tcg - origins-slim booster box": {
    "name": "Riftbound: League of Legends TCG - Origins-Slim Booster Box",
    "caseQuantity": 12,
    "caseUsd": 403,
    "displayPrice": "$403.00",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "riftbound: league of legends tcg - origins-thick booster box": {
    "name": "Riftbound: League of Legends TCG - Origins-Thick Booster Box",
    "caseQuantity": 12,
    "caseUsd": 680,
    "displayPrice": "$680.00",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "riftbound: league of legends tcg chinese-spiritforged-slim booster box": {
    "name": "Riftbound: League of Legends TCG Chinese-Spiritforged-Slim Booster Box",
    "caseQuantity": 12,
    "caseUsd": 340.4,
    "displayPrice": "$340.40",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "riftbound: league of legends tcg chinese-spiritforged-thick booster box": {
    "name": "Riftbound: League of Legends TCG Chinese-Spiritforged-Thick Booster Box",
    "caseQuantity": 12,
    "caseUsd": 451.9,
    "displayPrice": "$451.90",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "riftbound: league of legends tcg - unleashed-slim booster box": {
    "name": "Riftbound: League of Legends TCG - unleashed-Slim Booster Box",
    "caseQuantity": 12,
    "caseUsd": 350.8,
    "displayPrice": "$350.80",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "riftbound: league of legends tcg - unleashed-thick booster box": {
    "name": "Riftbound: League of Legends TCG - unleashed-Thick Booster Box",
    "caseQuantity": 12,
    "caseUsd": 451.9,
    "displayPrice": "$451.90",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "pokemon s-chinese30th anniv first partner holo cardset vol.l sealed": {
    "name": "Pokemon S-Chinese30th Anniv First Partner Holo CardSet Vol.l Sealed",
    "caseQuantity": 64,
    "caseUsd": 775.1,
    "displayPrice": "$775.10",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "pokemon s-chinese30th anniv first partner holo cardset vol.l sealed-one box": {
    "name": "Pokemon S-Chinese30th Anniv First Partner Holo CardSet Vol.l Sealed-ONE BOX",
    "caseQuantity": 1,
    "caseUsd": 10.3,
    "displayPrice": "$10.30",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "pikachu v-union card frame collection box": {
    "name": "Pikachu V-UNION Card Frame Collection Box",
    "caseQuantity": 1,
    "caseUsd": 122.7,
    "displayPrice": "$122.70",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "2026 dragon boat festival gift box": {
    "name": "2026 Dragon Boat Festival Gift Box",
    "caseQuantity": 12,
    "caseUsd": 194.1,
    "displayPrice": "$194.10",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv9c: stellar crystal booster box": {
    "name": "CSV9C: Stellar Crystal Booster Box",
    "caseQuantity": 20,
    "caseUsd": 411.1,
    "displayPrice": "$411.10",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv9c: stellar crystal jumbo booster box": {
    "name": "CSV9C: Stellar Crystal Jumbo Booster Box",
    "caseQuantity": 20,
    "caseUsd": 753.3,
    "displayPrice": "$753.30",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "pokemon s-chinese30th anniv first partner holo cardset vol.2 sealed": {
    "name": "Pokemon S-Chinese30th Anniv First Partner Holo CardSet Vol.2 Sealed",
    "caseQuantity": 64,
    "caseUsd": null,
    "displayPrice": "Contact for current quote",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv9c: stellar crystal coin set": {
    "name": "CSV9C: Stellar Crystal Coin Set",
    "caseQuantity": 180,
    "caseUsd": null,
    "displayPrice": "Contact for current quote",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "teal mask ogerpon gift box": {
    "name": "Teal Mask Ogerpon Gift Box",
    "caseQuantity": 12,
    "caseUsd": 601.5,
    "displayPrice": "$601.50",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "hearthflame mask ogerpon gift box": {
    "name": "Hearthflame Mask Ogerpon Gift Box",
    "caseQuantity": 12,
    "caseUsd": 601.5,
    "displayPrice": "$601.50",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "wellspring mask ogerpon gift box": {
    "name": "Wellspring Mask Ogerpon Gift Box",
    "caseQuantity": 12,
    "caseUsd": 601.5,
    "displayPrice": "$601.50",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cornerstone mask ogerpon gift box": {
    "name": "Cornerstone Mask Ogerpon Gift Box",
    "caseQuantity": 12,
    "caseUsd": 601.5,
    "displayPrice": "$601.50",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv7c: blade awakening coin set": {
    "name": "CSV7C: Blade Awakening Coin Set",
    "caseQuantity": 180,
    "caseUsd": 699.3,
    "displayPrice": "$699.30",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv8c: brilliant fantasy coin set": {
    "name": "CSV8C: Brilliant Fantasy Coin Set",
    "caseQuantity": 180,
    "caseUsd": 609.6,
    "displayPrice": "$609.60",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs4ac: nine colors gathering - friends jumbo booster box-loose boxes": {
    "name": "CS4aC: Nine Colors Gathering - Friends Jumbo Booster Box-loose boxes",
    "caseQuantity": 1,
    "caseUsd": 215.6,
    "displayPrice": "$215.60",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs4bc: nine colors gathering - origin jumbo booster box-loose boxes": {
    "name": "CS4bC: Nine Colors Gathering - Origin Jumbo Booster Box-loose boxes",
    "caseQuantity": 1,
    "caseUsd": 106.4,
    "displayPrice": "$106.40",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "electric plush toy blind boxs": {
    "name": "Electric Plush toy Blind boxs",
    "caseQuantity": 6,
    "caseUsd": 112.6,
    "displayPrice": "$112.60",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs2bc: vivid portrayals - indigo booster box 12box +cs2ac: vivid portrayals - obsidian booster box 12box": {
    "name": "CS2bC: Vivid Portrayals - Indigo Booster Box 12box +CS2aC: Vivid Portrayals - Obsidian Booster Box 12box",
    "caseQuantity": 24,
    "caseUsd": 699.3,
    "displayPrice": "$699.30",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "collect 151 jigsaw magnet set-loose box": {
    "name": "Collect 151 Jigsaw Magnet Set-loose box",
    "caseQuantity": 100,
    "caseUsd": 683,
    "displayPrice": "$683.00",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "collect 151: first partner premium gift box squirtle": {
    "name": "Collect 151: First Partner Premium Gift Box Squirtle",
    "caseQuantity": 8,
    "caseUsd": 1212.6,
    "displayPrice": "$1,212.60",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "collect 151: first partner premium gift box charmander": {
    "name": "Collect 151: First Partner Premium Gift Box Charmander",
    "caseQuantity": 8,
    "caseUsd": 1212.6,
    "displayPrice": "$1,212.60",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "collect 151: first partner premium gift box bulbasaur": {
    "name": "Collect 151: First Partner Premium Gift Box Bulbasaur",
    "caseQuantity": 8,
    "caseUsd": 1212.6,
    "displayPrice": "$1,212.60",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "dream painting collection water figure set": {
    "name": "Dream Painting Collection Water Figure Set",
    "caseQuantity": 48,
    "caseUsd": 454.5,
    "displayPrice": "$454.50",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "collect 151 pokemon card holder set": {
    "name": "Collect 151 Pokémon Card Holder Set",
    "caseQuantity": 12,
    "caseUsd": 127.6,
    "displayPrice": "$127.60",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "dream painting collection 151 figure set": {
    "name": "Dream Painting Collection 151 Figure Set",
    "caseQuantity": 48,
    "caseUsd": 786.4,
    "displayPrice": "$786.40",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "sword & shield trainer collection gift box": {
    "name": "Sword & Shield Trainer Collection Gift Box",
    "caseQuantity": 21,
    "caseUsd": 150.9,
    "displayPrice": "$150.90",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "sleeping eeveelutions- holly box": {
    "name": "Sleeping Eeveelutions- Holly Box",
    "caseQuantity": 9,
    "caseUsd": 55.6,
    "displayPrice": "$55.60",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "radiant energy gift box no.3": {
    "name": "Radiant Energy Gift Box NO.3",
    "caseQuantity": 12,
    "caseUsd": 634.1,
    "displayPrice": "$634.10",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "pokemon magnetic coin set paldea": {
    "name": "Pokemon Magnetic Coin Set Paldea",
    "caseQuantity": 80,
    "caseUsd": 340.7,
    "displayPrice": "$340.70",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs3.5c: scorching skies booster box": {
    "name": "CS3.5C: Scorching Skies Booster Box",
    "caseQuantity": 20,
    "caseUsd": 508.9,
    "displayPrice": "$508.90",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "cs4.5c: final flame dance booster box": {
    "name": "CS4.5C: Final Flame Dance Booster Box",
    "caseQuantity": 20,
    "caseUsd": 508.9,
    "displayPrice": "$508.90",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv9.5:terastal gathering booster box-loose box": {
    "name": "CSV9.5:Terastal Gathering Booster Box-loose box",
    "caseQuantity": 1,
    "caseUsd": 76.2,
    "displayPrice": "$76.20",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv9.5c: terastal gathering gift box": {
    "name": "CSV9.5C: Terastal Gathering Gift Box",
    "caseQuantity": 6,
    "caseUsd": 533.3,
    "displayPrice": "$533.30",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv9.5c: terastal gathering coin set": {
    "name": "CSV9.5C: Terastal Gathering Coin Set",
    "caseQuantity": 80,
    "caseUsd": 663,
    "displayPrice": "$663.00",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv9.5c: terastal gathering tin collection box": {
    "name": "CSV9.5C: Terastal Gathering Tin Collection Box",
    "caseQuantity": 40,
    "caseUsd": 718.5,
    "displayPrice": "$718.50",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv9.5c: terastal gathering badge box": {
    "name": "CSV9.5C: Terastal Gathering Badge Box",
    "caseQuantity": 80,
    "caseUsd": 625.9,
    "displayPrice": "$625.90",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv9.5c: terastal gathering quicksand card display pendant gift box": {
    "name": "CSV9.5C: Terastal Gathering Quicksand Card Display Pendant Gift Box",
    "caseQuantity": 40,
    "caseUsd": 746.3,
    "displayPrice": "$746.30",
    "note": "Base product price only. Shipping fee is quoted separately by destination."
  },
  "csv9.5c: terastal gathering eevee & friends gift box one box": {
    "name": "CSV9.5C: Terastal Gathering Eevee & Friends Gift Box One box",
    "caseQuantity": 1,
    "caseUsd": 274.1,
    "displayPrice": "$274.10",
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
