(function () {
  var measurementId = "G-27HDZZVFW0";
  var metaPixelId = "1515037039746986";

  if (!measurementId) return;

  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(measurementId);
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = window.gtag || gtag;

  gtag("js", new Date());
  gtag("config", measurementId);

  if (metaPixelId && metaPixelId !== "META_PIXEL_ID_HERE") {
    function sendMetaFallback(eventName) {
      var image = new Image();
      image.width = 1;
      image.height = 1;
      image.style.display = "none";
      image.src =
        "https://www.facebook.com/tr?id=" +
        encodeURIComponent(metaPixelId) +
        "&ev=" +
        encodeURIComponent(eventName) +
        "&dl=" +
        encodeURIComponent(window.location.href) +
        "&rl=" +
        encodeURIComponent(document.referrer || "") +
        "&if=false&ts=" +
        Date.now();
      document.body.appendChild(image);
    }

    (function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

    window.fbq("init", metaPixelId);
    window.fbq("track", "PageView");
    window.setTimeout(function () {
      if (!window.fbq || !window.fbq.loaded) sendMetaFallback("PageView");
    }, 1500);

    document.addEventListener("click", function (event) {
      var link = event.target && event.target.closest ? event.target.closest("a") : null;
      if (!link || !link.href) return;
      if (link.href.indexOf("wa.me/17203170080") !== -1 || link.href.indexOf("inquiry.html") !== -1) {
        if (window.fbq) {
          window.fbq("track", "Lead");
        } else {
          sendMetaFallback("Lead");
        }
      }
    });
  }
})();
