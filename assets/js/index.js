(function () {
  const tabsRoot = document.querySelector("[data-product-tabs]");
  if (!tabsRoot) return;

  const tabs = Array.from(tabsRoot.querySelectorAll("[data-tab-target]"));
  const panels = Array.from(document.querySelectorAll("[data-tab-panel]"));

  function activateTab(target) {
    tabs.forEach((tab) => {
      const isActive = tab.dataset.tabTarget === target;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    panels.forEach((panel) => {
      panel.hidden = panel.dataset.tabPanel !== target;
    });
  }

  tabs.forEach((tab) => {
    tab.setAttribute("aria-selected", tab.classList.contains("is-active") ? "true" : "false");
    tab.addEventListener("click", () => activateTab(tab.dataset.tabTarget));
  });

  activateTab("all");
})();

(function () {
  const track = document.querySelector(".category-track");
  const searchInput = document.querySelector("[data-category-search]");
  if (!track) return;

  const cards = Array.from(track.querySelectorAll(".category-card"));

  function filterCategories() {
    if (!searchInput) return;
    const keyword = searchInput.value.trim().toLowerCase();

    cards.forEach((card) => {
      const title = card.querySelector("h3")?.textContent.toLowerCase() || "";
      card.hidden = keyword.length > 0 && !title.includes(keyword);
    });
  }

  searchInput?.addEventListener("input", filterCategories);
})();

(function () {
  const categoryList = document.querySelector("[data-product-category-list]");
  const featureCards = Array.from(document.querySelectorAll("[data-feature-card]"));
  if (!categoryList || featureCards.length === 0) return;

  const productGroups = {
    "pet-supplies": [
      { title: "Portable Folding Baby Bath Tub", image: "./assets/images/products/pet-supplies-01.webp" },
      { title: "Baby Potty Training Toilet Seat", image: "./assets/images/products/pet-supplies-02.webp" },
      { title: "Baby Tableware Set", image: "./assets/images/products/pet-supplies-03.jpg" },
      { title: "Baby Bottle Brush Set", image: "./assets/images/products/pet-supplies-04.jpg" },
      { title: "All-Silicone Teething Toy", image: "./assets/images/products/pet-supplies-05.png" },
      { title: "Baby Food Scissors", image: "./assets/images/products/pet-supplies-06.png" }
    ],
    footwear: [
      { title: "PP Shoe Storage Rack", image: "./assets/images/products/footwear-01.webp" },
      { title: "Desktop Storage Box", image: "./assets/images/products/footwear-02.jpg" },
      { title: "Drawer-Style Storage Box", image: "./assets/images/products/footwear-03.jpg" },
      { title: "Desktop Rotating Organizer", image: "./assets/images/products/footwear-04.jpg" },
      { title: "Folding Storage Cabinet", image: "./assets/images/products/footwear-05.jpg" },
      { title: "Plastic Paper Towel Storage Box", image: "./assets/images/products/footwear-06.jpg" }
    ],
    "bags-luggage": [
      { title: "Big Mac Folding Cabinet", image: "./assets/images/products/bags-luggage-01.jpg" },
      { title: "Children Folding Storage Cabinet", image: "./assets/images/products/bags-luggage-02.jpg" },
      { title: "Collapsible Laundry Basket", image: "./assets/images/products/bags-luggage-03.jpg" },
      { title: "Drawer-Style Storage Box", image: "./assets/images/products/bags-luggage-04.png" },
      { title: "Desktop Storage Box", image: "./assets/images/products/bags-luggage-05.jpg" },
      { title: "Outdoor Folding Storage Box", image: "./assets/images/products/bags-luggage-06.jpg" }
    ],
    "crafts-gifts": [
      { title: "Cactus Hook", image: "./assets/images/products/crafts-gifts-01.jpg" },
      { title: "Cartoon Animal Hook", image: "./assets/images/products/crafts-gifts-02.png" },
      { title: "Colored Round Hooks", image: "./assets/images/products/crafts-gifts-03.jpg" },
      { title: "Black Bronzed Marble Hooks", image: "./assets/images/products/crafts-gifts-04.jpeg" },
      { title: "Alien-Shaped Water Cup", image: "./assets/images/products/crafts-gifts-05.png" },
      { title: "Cow Sleeve Water Cup", image: "./assets/images/products/crafts-gifts-06.jpeg" }
    ],
    "maternity-baby": [
      { title: "Newborn Glass Baby Bottle", image: "./assets/images/products/maternity-baby-01.png" },
      { title: "Baby Tableware Set", image: "./assets/images/products/maternity-baby-02.jpg" },
      { title: "All-Silicone Pacifier", image: "./assets/images/products/maternity-baby-03.png" },
      { title: "Baby Bottle Brush", image: "./assets/images/products/maternity-baby-04.png" },
      { title: "Baby Grinding Bowl", image: "./assets/images/products/maternity-baby-05.png" },
      { title: "Baby Nail Clippers", image: "./assets/images/products/maternity-baby-06.jpg" }
    ],
    kitchenware: [
      { title: "Rice Cooker", image: "./assets/images/products/kitchenware-01.jpg" },
      { title: "Slow Juicer", image: "./assets/images/products/kitchenware-02.jpg" },
      { title: "Meat Grinder", image: "./assets/images/products/kitchenware-03.jpg" },
      { title: "Kettle", image: "./assets/images/products/kitchenware-04.jpg" },
      { title: "Tea Kettle Glass", image: "./assets/images/products/kitchenware-05.jpg" },
      { title: "Air Fryer", image: "./assets/images/products/kitchenware-06.jpg" }
    ],
    "dining-supplies": [
      { title: "Rectangular Glass Crisper Box", image: "./assets/images/products/dining-supplies-01.jpg" },
      { title: "Round Crisper Box", image: "./assets/images/products/dining-supplies-02.jpg" },
      { title: "Plastic Food Box", image: "./assets/images/products/dining-supplies-03.jpg" },
      { title: "Sealed Jar", image: "./assets/images/products/dining-supplies-04.png" },
      { title: "Cold Water Kettle", image: "./assets/images/products/dining-supplies-05.jpeg" },
      { title: "Food Container Cup", image: "./assets/images/products/dining-supplies-06.png" }
    ],
    "living-room-products": [
      { title: "PP Shoe Storage Rack", image: "./assets/images/products/living-room-products-01.webp" },
      { title: "Desktop Storage Box", image: "./assets/images/products/living-room-products-02.jpg" },
      { title: "Drawer-Style Storage Box", image: "./assets/images/products/living-room-products-03.jpg" },
      { title: "Rotating Organizer", image: "./assets/images/products/living-room-products-04.jpg" },
      { title: "Plastic Tissue Storage Box", image: "./assets/images/products/living-room-products-05.jpg" },
      { title: "Bamboo Lid Storage Box", image: "./assets/images/products/living-room-products-06.png" }
    ],
    "bathroom-products": [
      { title: "Portable Foldable Plastic Basin", image: "./assets/images/products/bathroom-products-01.webp" },
      { title: "Bathroom Plastic Product", image: "./assets/images/products/bathroom-products-02.webp" },
      { title: "Bathroom Storage Product", image: "./assets/images/products/bathroom-products-03.webp" },
      { title: "Plastic Basin Product", image: "./assets/images/products/bathroom-products-04.webp" },
      { title: "Bathroom Series Product", image: "./assets/images/products/bathroom-products-05.webp" },
      { title: "Bathroom Accessory Product", image: "./assets/images/products/bathroom-products-06.webp" }
    ],
    "mechanical-electrical": [
      { title: "2-in-1 Grinding Machine", image: "./assets/images/products/mechanical-electrical-01.jpg" },
      { title: "Air Pump", image: "./assets/images/products/mechanical-electrical-02.jpg" },
      { title: "Meat Grinder", image: "./assets/images/products/mechanical-electrical-03.jpg" },
      { title: "Juicer Blender", image: "./assets/images/products/mechanical-electrical-04.jpg" },
      { title: "Cooking Stick", image: "./assets/images/products/mechanical-electrical-05.jpg" },
      { title: "Tea Kettle Glass", image: "./assets/images/products/mechanical-electrical-06.jpg" }
    ],
    "small-home-appliances": [
      { title: "Air Fryer", image: "./assets/images/products/small-home-appliances-01.jpg" },
      { title: "Smart Visible Air Fryer", image: "./assets/images/products/small-home-appliances-02.jpg" },
      { title: "Rice Cooker", image: "./assets/images/products/small-home-appliances-03.jpg" },
      { title: "Slow Juicer", image: "./assets/images/products/small-home-appliances-04.jpg" },
      { title: "Kettle", image: "./assets/images/products/small-home-appliances-05.jpg" },
      { title: "2 in 1 Juicer & Blender", image: "./assets/images/products/small-home-appliances-06.jpg" }
    ],
    "outdoor-camping": [
      { title: "Extra Large Camping Box", image: "./assets/images/products/outdoor-camping-01.jpg" },
      { title: "Outdoor Folding Laundry Basket", image: "./assets/images/products/outdoor-camping-02.webp" },
      { title: "Outdoor Foldable Basin", image: "./assets/images/products/outdoor-camping-03.webp" },
      { title: "Wooden Lid Folding Box", image: "./assets/images/products/outdoor-camping-04.jpg" },
      { title: "Collapsible Laundry Basket", image: "./assets/images/products/outdoor-camping-05.jpg" },
      { title: "Folding Storage Cabinet", image: "./assets/images/products/outdoor-camping-06.jpg" }
    ]
  };

  const links = Array.from(categoryList.querySelectorAll("[data-product-category]"));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let displayedSlug = "";
  let requestedSlug = "";
  let transitionPhase = "idle";
  let leaveTimer = null;
  let enterTimer = null;

  function renderFeaturedProducts(slug) {
    const selected = productGroups[slug] || productGroups["pet-supplies"];

    featureCards.forEach((card, index) => {
      const product = selected[index % selected.length];
      const image = card.querySelector("img");
      const title = card.querySelector("h3");
      if (!product || !image || !title) return;

      image.src = product.image;
      image.alt = product.title;
      title.textContent = product.title;
    });
  }

  function finishEntrance() {
    window.clearTimeout(enterTimer);
    enterTimer = window.setTimeout(() => {
      featureCards.forEach((card) => card.classList.remove("is-entering"));
      transitionPhase = "idle";
      enterTimer = null;

      if (requestedSlug !== displayedSlug) {
        beginTransition();
      }
    }, 280);
  }

  function beginTransition() {
    if (transitionPhase !== "idle" || requestedSlug === displayedSlug) return;

    if (reduceMotion) {
      renderFeaturedProducts(requestedSlug);
      displayedSlug = requestedSlug;
      return;
    }

    transitionPhase = "leaving";
    featureCards.forEach((card) => {
      card.classList.remove("is-entering");
      card.classList.add("is-leaving");
    });

    window.clearTimeout(leaveTimer);
    leaveTimer = window.setTimeout(() => {
      renderFeaturedProducts(requestedSlug);
      displayedSlug = requestedSlug;

      featureCards.forEach((card) => {
        card.classList.remove("is-leaving");
        card.classList.add("is-entering");
      });

      transitionPhase = "entering";
      leaveTimer = null;
      finishEntrance();
    }, 160);
  }

  function setFeaturedProducts(slug) {
    if (!slug) return;
    requestedSlug = slug;

    links.forEach((link) => {
      link.classList.toggle("is-active", link.dataset.productCategory === slug);
    });

    beginTransition();
  }

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => setFeaturedProducts(link.dataset.productCategory));
    link.addEventListener("focus", () => setFeaturedProducts(link.dataset.productCategory));
  });

  const initialSlug = links.find((link) => link.classList.contains("is-active"))?.dataset.productCategory || "pet-supplies";
  requestedSlug = initialSlug;
  displayedSlug = initialSlug;
  renderFeaturedProducts(initialSlug);
})();

(function () {
  const carousel = document.querySelector("[data-showroom-carousel]");
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll("[data-showroom-slide]"));
  const prevButton = carousel.querySelector("[data-showroom-prev]");
  const nextButton = carousel.querySelector("[data-showroom-next]");
  if (slides.length === 0) return;

  let activeIndex = 0;
  let timer = null;
  let dragStartX = 0;
  let dragDeltaX = 0;
  let isDragging = false;

  function updateSlides() {
    slides.forEach((slide, index) => {
      const offset = (index - activeIndex + slides.length) % slides.length;
      slide.classList.toggle("is-active", offset === 0);
      slide.classList.toggle("is-next", offset === 1);
      slide.classList.toggle("is-far", offset === 2);
      slide.classList.toggle("is-prev", offset === slides.length - 1);
    });
  }

  function goTo(index) {
    activeIndex = (index + slides.length) % slides.length;
    updateSlides();
  }

  function startAuto() {
    window.clearInterval(timer);
    timer = window.setInterval(() => goTo(activeIndex + 1), 3600);
  }

  prevButton?.addEventListener("click", () => {
    goTo(activeIndex - 1);
    startAuto();
  });

  nextButton?.addEventListener("click", () => {
    goTo(activeIndex + 1);
    startAuto();
  });

  carousel.addEventListener("mouseenter", () => window.clearInterval(timer));
  carousel.addEventListener("mouseleave", startAuto);

  carousel.addEventListener("pointerdown", (event) => {
    if (event.target.closest("button")) return;
    isDragging = true;
    dragStartX = event.clientX;
    dragDeltaX = 0;
    carousel.classList.add("is-dragging");
    carousel.setPointerCapture?.(event.pointerId);
    window.clearInterval(timer);
  });

  carousel.addEventListener("pointermove", (event) => {
    if (!isDragging) return;
    dragDeltaX = event.clientX - dragStartX;
  });

  function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    carousel.classList.remove("is-dragging");

    if (Math.abs(dragDeltaX) > 48) {
      goTo(activeIndex + (dragDeltaX < 0 ? 1 : -1));
    }

    dragDeltaX = 0;
    startAuto();
  }

  carousel.addEventListener("pointerup", endDrag);
  carousel.addEventListener("pointercancel", endDrag);
  carousel.addEventListener("lostpointercapture", endDrag);

  updateSlides();
  startAuto();
})();

(function () {
  const carousel = document.querySelector("[data-news-carousel]");
  if (!carousel) return;

  const track = carousel.querySelector("[data-news-track]");
  const cards = Array.from(carousel.querySelectorAll(".showroom-news-card"));
  const prevButton = carousel.querySelector("[data-news-prev]");
  const nextButton = carousel.querySelector("[data-news-next]");
  if (!track || cards.length === 0) return;

  let activeIndex = 0;

  function getMetrics() {
    const cardWidth = cards[0].getBoundingClientRect().width;
    const trackStyles = window.getComputedStyle(track);
    const gap = parseFloat(trackStyles.columnGap || trackStyles.gap) || 0;
    const viewportWidth = carousel.querySelector(".showroom-news-viewport")?.getBoundingClientRect().width || cardWidth;
    const perView = Math.max(1, Math.round((viewportWidth + gap) / (cardWidth + gap)));

    return {
      cardWidth,
      gap,
      maxIndex: Math.max(0, cards.length - perView)
    };
  }

  function update() {
    const { cardWidth, gap, maxIndex } = getMetrics();
    activeIndex = Math.min(activeIndex, maxIndex);
    track.style.transform = `translate3d(${-activeIndex * (cardWidth + gap)}px, 0, 0)`;
    const shouldShowControls = maxIndex > 0;
    prevButton?.toggleAttribute("hidden", !shouldShowControls);
    nextButton?.toggleAttribute("hidden", !shouldShowControls);
  }

  function go(direction) {
    const { maxIndex } = getMetrics();
    if (maxIndex === 0) return;
    activeIndex = (activeIndex + direction + maxIndex + 1) % (maxIndex + 1);
    update();
  }

  prevButton?.addEventListener("click", () => go(-1));
  nextButton?.addEventListener("click", () => go(1));
  window.addEventListener("resize", update);

  update();
})();

(function () {
  const accordion = document.querySelector("[data-why-accordion]");
  if (!accordion) return;

  const items = Array.from(accordion.querySelectorAll(".why-accordion__item"));

  function openItem(activeItem) {
    items.forEach((item) => {
      const isOpen = item === activeItem;
      item.classList.toggle("is-open", isOpen);
      item.querySelector(".why-accordion__trigger")?.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  items.forEach((item) => {
    item.querySelector(".why-accordion__trigger")?.addEventListener("click", () => openItem(item));
  });

  openItem(items.find((item) => item.classList.contains("is-open")) || items[0]);
})();

(function () {
  const form = document.querySelector("[data-home-inquiry]");
  if (!form) return;

  const status = form.querySelector("[data-home-inquiry-status]");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const value = function (name) {
      return form.elements.namedItem(name)?.value.trim() || "Not provided";
    };

    const subject = `Sourcing Inquiry - ${value("category")}`;
    const body = [
      "Hello HUANGYAN SOURCING Team,",
      "",
      "I would like to discuss a sourcing requirement.",
      "",
      `Name: ${value("name")}`,
      `Email: ${value("email")}`,
      `Product Category: ${value("category")}`,
      "",
      "Requirement:",
      value("message"),
      "",
      "Best regards,",
      value("name")
    ].join("\n");

    if (status) status.textContent = "Your email app will open with this inquiry filled in.";
    window.location.href = `mailto:info@huangyansourcing.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
})();
