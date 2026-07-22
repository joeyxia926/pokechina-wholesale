(function () {
  var measurementId = "G-27HDZZVFW0";
  var metaPixelId = "";

  if (!measurementId) return;

  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(measurementId);
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }

  gtag("js", new Date());
  gtag("config", measurementId);

  if (metaPixelId && metaPixelId !== "META_PIXEL_ID_HERE") {
    window.fbq = window.fbq || function () {
      (window.fbq.q = window.fbq.q || []).push(arguments);
    };
    window._fbq = window.fbq;
    window.fbq.loaded = true;
    window.fbq.version = "2.0";
    window.fbq.queue = [];

    var metaScript = document.createElement("script");
    metaScript.async = true;
    metaScript.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(metaScript);

    window.fbq("init", metaPixelId);
    window.fbq("track", "PageView");

    document.addEventListener("click", function (event) {
      var link = event.target && event.target.closest ? event.target.closest("a") : null;
      if (!link || !link.href || !window.fbq) return;
      if (link.href.indexOf("wa.me/17203170080") !== -1 || link.href.indexOf("inquiry.html") !== -1) {
        window.fbq("track", "Lead");
      }
    });
  }
})();
