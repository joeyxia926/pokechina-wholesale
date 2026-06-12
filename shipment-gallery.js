window.PCW_SHIPMENT_PHOTOS = [
  {
    title: "Wholesale shipment preparation",
    caption: "Recent buyer shipment staged for packing and delivery.",
    imageUrl: "assets/shipments/shipment-web-01.jpg",
  },
  {
    title: "Buyer order ready to ship",
    caption: "Packed inventory prepared for wholesale customer fulfillment.",
    imageUrl: "assets/shipments/shipment-web-02.jpg",
  },
  {
    title: "Inventory packed with care",
    caption: "Shipment photos help buyers see real operating activity.",
    imageUrl: "assets/shipments/shipment-web-03.jpg",
  },
  {
    title: "Wholesale order dispatch",
    caption: "Orders are checked and organized before shipping.",
    imageUrl: "assets/shipments/shipment-web-04.jpg",
  },
  {
    title: "Recent shipment batch",
    caption: "Real packing updates from active buyer orders.",
    imageUrl: "assets/shipments/shipment-web-05.jpg",
  },
  {
    title: "U.S. logistics coordination",
    caption: "Buyer orders prepared for reliable fulfillment support.",
    imageUrl: "assets/shipments/shipment-web-06.jpg",
  },
  {
    title: "Warehouse shipment photo",
    caption: "Recent packed inventory ready for customer delivery.",
    imageUrl: "assets/shipments/shipment-web-07.jpg",
  },
  {
    title: "Customer order fulfillment",
    caption: "Shipment documentation helps build trust with wholesale buyers.",
    imageUrl: "assets/shipments/shipment-web-08.jpg",
  },
  {
    title: "Packed buyer inventory",
    caption: "Use this gallery to share real shipment activity after each order batch.",
    imageUrl: "assets/shipments/shipment-web-09.jpg",
  },
];

(() => {
  const image = document.getElementById("shipment-gallery-image");
  const title = document.getElementById("shipment-gallery-title");
  const caption = document.getElementById("shipment-gallery-caption");
  const count = document.getElementById("shipment-gallery-count");
  const dots = document.getElementById("shipment-gallery-dots");
  const photos = window.PCW_SHIPMENT_PHOTOS || [];
  let index = 0;

  if (!image || !title || !caption || !count || !dots || !photos.length) return;

  function renderPhoto(nextIndex) {
    const photo = photos[nextIndex];
    image.classList.remove("is-visible");
    window.setTimeout(() => {
      image.src = photo.imageUrl;
      image.alt = photo.title;
      title.textContent = photo.title;
      caption.textContent = photo.caption;
      count.textContent = `${nextIndex + 1} / ${photos.length}`;
      dots.innerHTML = photos.map((_, dotIndex) => `<span class="${dotIndex === nextIndex ? "active" : ""}"></span>`).join("");
      image.classList.add("is-visible");
    }, 160);
  }

  renderPhoto(index);
  window.setInterval(() => {
    index = (index + 1) % photos.length;
    renderPhoto(index);
  }, 2000);
})();
