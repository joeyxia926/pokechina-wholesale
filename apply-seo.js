const fs = require("fs");

const DOMAIN = "https://www.pokechinawholesale.com";

const pages = {
  "index.html": {
    path: "/",
    title: "PokeChina Wholesale | Chinese Pokemon Wholesale Supplier",
    description:
      "PokeChina Wholesale helps North American card shops, distributors, and online sellers source authentic Chinese Pokemon TCG products with wholesale support.",
  },
  "products.html": {
    path: "/products.html",
    title: "Chinese Pokemon Wholesale Products | PokeChina Wholesale",
    description:
      "Browse Chinese Pokemon booster boxes, ETBs, gift boxes, accessories, coin sets, and single card products. Request private wholesale pricing.",
  },
  "about.html": {
    path: "/about.html",
    title: "About PokeChina Wholesale | Powered by USMA",
    description:
      "Learn about PokeChina Wholesale, a USMA-powered Chinese Pokemon wholesale partner with live commerce, collectibles, and sourcing experience.",
  },
  "inquiry.html": {
    path: "/inquiry.html",
    title: "Request Chinese Pokemon Wholesale Pricing | PokeChina Wholesale",
    description:
      "Contact PokeChina Wholesale on WhatsApp to request Chinese Pokemon TCG wholesale pricing, MOQ, inventory, and shipping information.",
  },
  "encyclopedia.html": {
    path: "/encyclopedia.html",
    title: "Chinese Pokemon Encyclopedia | PokeChina Wholesale",
    description:
      "Learn why Chinese Pokemon products are gaining collector and retailer demand, including official releases, unique formats, and market opportunities.",
  },
  "insights.html": {
    path: "/insights.html",
    title: "Chinese Pokemon News & Market Insights | PokeChina Wholesale",
    description:
      "Read Chinese Pokemon release updates, product guides, market analysis, collector trends, and retail opportunities for wholesale buyers.",
  },
  "faq.html": {
    path: "/faq.html",
    title: "Chinese Pokemon Wholesale FAQ | PokeChina Wholesale",
    description:
      "Answers to common questions about authentic Chinese Pokemon products, wholesale pricing, international shipping, and buyer accounts.",
  },
  "contact.html": {
    path: "/contact.html",
    title: "Contact PokeChina Wholesale | Chinese Pokemon Supplier",
    description:
      "Contact PokeChina Wholesale for Chinese Pokemon product sourcing, inventory requests, wholesale support, and market guidance.",
  },
  "usma-wholesale-preview.html": {
    path: "/",
    title: "PokeChina Wholesale | Chinese Pokemon Wholesale Supplier",
    description:
      "PokeChina Wholesale helps North American card shops, distributors, and online sellers source authentic Chinese Pokemon TCG products with wholesale support.",
  },
};

function escapeAttr(value) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function seoBlock(config) {
  const canonical = `${DOMAIN}${config.path}`;
  return `  <title>${config.title}</title>
  <meta name="description" content="${escapeAttr(config.description)}">
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escapeAttr(config.title)}">
  <meta property="og:description" content="${escapeAttr(config.description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${DOMAIN}/assets/horizontal-white-bg-1200.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeAttr(config.title)}">
  <meta name="twitter:description" content="${escapeAttr(config.description)}">`;
}

function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PokeChina Wholesale",
    url: DOMAIN,
    logo: `${DOMAIN}/assets/horizontal-white-bg-1200.png`,
    email: "usma.pokemon.2026@gmail.com",
    sameAs: [
      "https://www.instagram.com/lasvegas_pokemon_wholesale/",
      "https://www.tiktok.com/@universal.breakz?is_from_webapp=1&sender_device=pc",
      "https://www.whatnot.com/s/JMnqBCi3",
    ],
  };
}

function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PokeChina Wholesale",
    url: DOMAIN,
  };
}

for (const [file, config] of Object.entries(pages)) {
  let html = fs.readFileSync(file, "utf8");
  const schema = file === "index.html" || file === "usma-wholesale-preview.html"
    ? [organizationSchema(), websiteSchema()]
    : [organizationSchema()];

  const head = `<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
${seoBlock(config)}
  <link rel="icon" type="image/png" href="assets/icon-square-128.png">
  <link rel="stylesheet" href="site.css">
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
  <script defer src="analytics.js"></script>
</head>`;

  html = html.replace(/<head>[\s\S]*?<\/head>/, head);

  fs.writeFileSync(file, html);
}

console.log(`Applied SEO metadata to ${Object.keys(pages).length} pages.`);
