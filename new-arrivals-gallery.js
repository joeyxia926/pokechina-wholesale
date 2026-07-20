window.PCW_NEW_ARRIVAL_PHOTOS = [
  {
    title: "Latest Chinese Pokemon arrival",
    caption: "New inventory photo for wholesale buyers.",
    imageUrl: "assets/new-arrivals/c46ce2680e3a405972550a7f00e53bb9.jpg",
  },
  {
    title: "Fresh product arrival",
    caption: "Recently arrived inventory available for buyer inquiry.",
    imageUrl: "assets/new-arrivals/b94b21221b4c6da20c7e62d1e06564b0.jpg",
  },
  {
    title: "New wholesale inventory",
    caption: "Click to view a larger product photo.",
    imageUrl: "assets/new-arrivals/dae7d2627504b1ff8b808a73bad5d17c.jpg",
  },
  {
    title: "Recently arrived products",
    caption: "Browse current arrivals before requesting wholesale pricing.",
    imageUrl: "assets/new-arrivals/3fd9cbf8793a57426cbbff9ccadc1335.jpg",
  },
  {
    title: "New arrival highlight",
    caption: "Chinese Pokemon products prepared for wholesale customers.",
    imageUrl: "assets/new-arrivals/df7a8a416708e68763f4f14d2da52c5a.jpg",
  },
  {
    title: "Wholesale product arrival",
    caption: "Newly received inventory for qualified buyers.",
    imageUrl: "assets/new-arrivals/7b06d0ceabcd7474e89004e6c83f5af2.jpg",
  },
  {
    title: "Fresh stock update",
    caption: "Current arrival photo for buyer review.",
    imageUrl: "assets/new-arrivals/68805e5e85286b2f8901ff0a773e3a2a.jpg",
  },
  {
    title: "Latest inventory update",
    caption: "Select any thumbnail to view more arrival photos.",
    imageUrl: "assets/new-arrivals/6c3106fa0332453a2743994e436be55a.jpg",
  },
  {
    title: "New product photo",
    caption: "New arrival image for current wholesale opportunities.",
    imageUrl: "assets/new-arrivals/54693d7b7baeb312a9f2c13407817deb.png",
  },
  {
    title: "Arrival showcase",
    caption: "Recently uploaded product image for buyer browsing.",
    imageUrl: "assets/new-arrivals/3ef2bec13f3e501a2f7d6acada93e6f1.png",
  },
  {
    title: "New inventory showcase",
    caption: "View larger for more product detail.",
    imageUrl: "assets/new-arrivals/38eda5e75a50145b7cc70cb362b7943c.png",
  },
  {
    title: "Fresh arrival image",
    caption: "New product photo added to the homepage gallery.",
    imageUrl: "assets/new-arrivals/07d539bc8e71d17475f20d43c16765fb.png",
  },
  {
    title: "Latest product image",
    caption: "Current arrival photo for customer review.",
    imageUrl: "assets/new-arrivals/bacdeb2d23acd10d99f2b5a48f006684.png",
  },
  {
    title: "New wholesale arrival",
    caption: "Contact us for availability, allocation, and current pricing.",
    imageUrl: "assets/new-arrivals/1203230b37c5366d0c2610bad496b57e.png",
  },
];

(() => {
  const image = document.getElementById("new-arrivals-gallery-image");
  const title = document.getElementById("new-arrivals-gallery-title");
  const caption = document.getElementById("new-arrivals-gallery-caption");
  const count = document.getElementById("new-arrivals-gallery-count");
  const dots = document.getElementById("new-arrivals-gallery-dots");
  const thumbnails = document.getElementById("new-arrivals-thumbnails");
  const expandButton = document.getElementById("new-arrivals-expand");
  const photos = window.PCW_NEW_ARRIVAL_PHOTOS || [];
  let index = 0;
  let timer = null;
  let lightbox = null;

  if (!image || !title || !caption || !count || !dots || !thumbnails || !photos.length) return;

  function renderSelectors(nextIndex) {
    dots.innerHTML = photos.map((_, dotIndex) => `<span class="${dotIndex === nextIndex ? "active" : ""}"></span>`).join("");
    thumbnails.innerHTML = photos.map((photo, thumbIndex) => `
      <button class="${thumbIndex === nextIndex ? "active" : ""}" type="button" data-index="${thumbIndex}" aria-label="View ${photo.title}">
        <img src="${photo.imageUrl}" alt="">
      </button>
    `).join("");
  }

  function renderPhoto(nextIndex) {
    index = (nextIndex + photos.length) % photos.length;
    const photo = photos[index];
    image.classList.remove("is-visible");
    window.setTimeout(() => {
      image.src = photo.imageUrl;
      image.alt = photo.title;
      title.textContent = photo.title;
      caption.textContent = photo.caption;
      count.textContent = `${index + 1} / ${photos.length}`;
      renderSelectors(index);
      image.classList.add("is-visible");
      updateLightbox();
    }, 160);
  }

  function startTimer() {
    window.clearInterval(timer);
    timer = window.setInterval(() => renderPhoto(index + 1), 2000);
  }

  function createLightbox() {
    const overlay = document.createElement("div");
    overlay.className = "new-arrivals-lightbox";
    overlay.innerHTML = `
      <button class="lightbox-close" type="button" aria-label="Close">Close</button>
      <button class="lightbox-nav lightbox-prev" type="button" aria-label="Previous photo">‹</button>
      <figure>
        <img alt="">
        <figcaption>
          <strong></strong>
          <span></span>
        </figcaption>
      </figure>
      <button class="lightbox-nav lightbox-next" type="button" aria-label="Next photo">›</button>
    `;
    document.body.appendChild(overlay);
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay || event.target.closest(".lightbox-close")) closeLightbox();
      if (event.target.closest(".lightbox-prev")) renderPhoto(index - 1);
      if (event.target.closest(".lightbox-next")) renderPhoto(index + 1);
    });
    return overlay;
  }

  function updateLightbox() {
    if (!lightbox || !lightbox.classList.contains("is-open")) return;
    const photo = photos[index];
    lightbox.querySelector("img").src = photo.imageUrl;
    lightbox.querySelector("img").alt = photo.title;
    lightbox.querySelector("strong").textContent = photo.title;
    lightbox.querySelector("span").textContent = `${index + 1} / ${photos.length} · ${photo.caption}`;
  }

  function openLightbox() {
    lightbox = lightbox || createLightbox();
    updateLightbox();
    lightbox.classList.add("is-open");
    document.body.classList.add("modal-open");
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    document.body.classList.remove("modal-open");
  }

  thumbnails.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-index]");
    if (!button) return;
    renderPhoto(Number(button.dataset.index));
    startTimer();
  });

  image.addEventListener("click", openLightbox);
  if (expandButton) expandButton.addEventListener("click", openLightbox);

  document.addEventListener("keydown", (event) => {
    if (!lightbox || !lightbox.classList.contains("is-open")) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") renderPhoto(index - 1);
    if (event.key === "ArrowRight") renderPhoto(index + 1);
  });

  renderPhoto(index);
  startTimer();
})();
