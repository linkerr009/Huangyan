tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "secondary-fixed-dim": "#ffb59c",
        "outline-variant": "#c5c5d4",
        "inverse-primary": "#b7c4ff",
        "on-tertiary-fixed-variant": "#7b2f07",
        "inverse-surface": "#2e3132",
        "primary-fixed": "#dce1ff",
        "on-primary": "#ffffff",
        "on-primary-fixed-variant": "#253f97",
        "on-background": "#191c1d",
        "on-surface-variant": "#444652",
        "steel-gray": "#334155",
        "error-container": "#ffdad6",
        "tertiary-fixed-dim": "#ffb598",
        "surface-bright": "#f8f9fa",
        "on-secondary-container": "#5c1a00",
        "surface-variant": "#e1e3e4",
        "deep-navy": "#0F172A",
        "silver-bg": "#F1F5F9",
        "primary-container": "#F07820",
        "on-error": "#ffffff",
        "surface-tint": "#E45A20",
        "on-primary-fixed": "#001552",
        "surface-container-lowest": "#ffffff",
        "inverse-on-surface": "#f0f1f2",
        "surface-container-high": "#e7e8e9",
        "surface": "#f8f9fa",
        "on-secondary-fixed": "#380c00",
        "primary": "#C82F1E",
        "on-surface": "#191c1d",
        "tertiary": "#4b1700",
        "on-error-container": "#93000a",
        "surface-container": "#edeeef",
        "on-secondary": "#ffffff",
        "surface-container-highest": "#e1e3e4",
        "on-tertiary-fixed": "#360f00",
        "secondary-fixed": "#ffdbcf",
        "slate-border": "#E2E8F0",
        "on-tertiary-container": "#f78d5f",
        "secondary": "#28A8E8",
        "energy-red": "#E45A20",
        "on-primary-container": "#8ea4ff",
        "tertiary-container": "#6f2600",
        "secondary-container": "#28A8E8",
        "surface-container-low": "#f3f4f5",
        "tertiary-fixed": "#ffdbcd",
        "on-tertiary": "#ffffff",
        "error": "#ba1a1a",
        "primary-fixed-dim": "#b7c4ff",
        "on-secondary-fixed-variant": "#822800",
        "surface-dim": "#d9dadb",
        "background": "#f8f9fa",
        "outline": "#757683"
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.625rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px"
      },
      spacing: {
        "margin-mobile": "16px",
        "section-gap-md": "80px",
        "section-gap-lg": "120px",
        "container-max": "1440px",
        "stack-md": "16px",
        "stack-sm": "8px",
        "stack-lg": "32px",
        gutter: "24px"
      },
      fontFamily: {
        "headline-lg": ["Hanken Grotesk"],
        "mono-data": ["Inter"],
        "label-sm": ["Inter"],
        "headline-lg-mobile": ["Hanken Grotesk"],
        "headline-xl": ["Hanken Grotesk"],
        "display-lg": ["Hanken Grotesk"],
        "body-md": ["Inter"],
        "body-lg": ["Inter"]
      },
      fontSize: {
        "headline-lg": ["32px", { lineHeight: "1.3", fontWeight: "700" }],
        "mono-data": ["14px", { lineHeight: "1.5", fontWeight: "500" }],
        "label-sm": ["14px", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "600" }],
        "headline-lg-mobile": ["28px", { lineHeight: "1.3", fontWeight: "700" }],
        "headline-xl": ["48px", { lineHeight: "1.2", fontWeight: "700" }],
        "display-lg": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }]
      }
    }
  }
};

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".xz-header");
    const toggle = document.querySelector(".xz-header__mobile-btn");
    const nav = document.querySelector(".xz-header__nav");
    const productsDropdown = document.querySelector("[data-products-dropdown]");
    const productsToggle = document.querySelector("[data-products-toggle]");
    const productsMenu = document.querySelector("[data-products-menu]");
    const mobileMenuQuery = window.matchMedia("(max-width: 860px)");

    const productCategories = [
      ["pet-supplies", "pets", "Pet Supplies"],
      ["footwear", "steps", "Footwear"],
      ["bags-luggage", "luggage", "Bags & Luggage"],
      ["crafts-gifts", "redeem", "Crafts & Gifts"],
      ["maternity-baby", "child_care", "Maternity & Baby"],
      ["kitchenware", "skillet", "Kitchenware"],
      ["dining-supplies", "restaurant", "Dining Supplies"],
      ["living-room-products", "chair", "Living Room Products"],
      ["bathroom-products", "bathtub", "Bathroom Products"],
      ["mechanical-electrical", "precision_manufacturing", "Mechanical & Electrical"],
      ["small-home-appliances", "blender", "Small Home Appliances"],
      ["outdoor-camping", "camping", "Outdoor & Camping"]
    ];

    if (!header || !toggle || !nav) return;

    if (productsMenu) {
      productsMenu.innerHTML = `
        <div class="xz-header__products-grid">
          ${productCategories.map(function (category) {
            return `<a href="./product-list.html?category=${category[0]}"><span class="material-symbols-outlined">${category[1]}</span><span>${category[2]}</span></a>`;
          }).join("")}
        </div>`;
    }

    toggle.setAttribute("aria-expanded", "false");

    toggle.addEventListener("click", function () {
      const isOpen = header.classList.toggle("is-mobile-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      if (!isOpen && productsDropdown && productsToggle) {
        productsDropdown.classList.remove("is-open");
        productsToggle.setAttribute("aria-expanded", "false");
      }
    });

    if (productsDropdown && productsToggle) {
      productsToggle.setAttribute("aria-expanded", "false");

      function syncProductsToggleMode() {
        const isMobile = mobileMenuQuery.matches;
        productsToggle.tabIndex = isMobile ? 0 : -1;
        productsToggle.setAttribute("aria-hidden", isMobile ? "false" : "true");

        if (!isMobile) {
          productsDropdown.classList.remove("is-open");
          productsToggle.setAttribute("aria-expanded", "false");
        }
      }

      productsToggle.addEventListener("click", function (event) {
        if (!mobileMenuQuery.matches) return;
        event.stopPropagation();
        const isOpen = productsDropdown.classList.toggle("is-open");
        productsToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });

      document.addEventListener("click", function (event) {
        if (productsDropdown.contains(event.target)) return;
        productsDropdown.classList.remove("is-open");
        productsToggle.setAttribute("aria-expanded", "false");
      });

      document.addEventListener("keydown", function (event) {
        if (event.key !== "Escape") return;
        productsDropdown.classList.remove("is-open");
        productsToggle.setAttribute("aria-expanded", "false");
      });

      if (typeof mobileMenuQuery.addEventListener === "function") {
        mobileMenuQuery.addEventListener("change", syncProductsToggleMode);
      } else {
        mobileMenuQuery.addListener(syncProductsToggleMode);
      }

      syncProductsToggleMode();
    }

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        header.classList.remove("is-mobile-open");
        toggle.setAttribute("aria-expanded", "false");
        if (productsDropdown && productsToggle) {
          productsDropdown.classList.remove("is-open");
          productsToggle.setAttribute("aria-expanded", "false");
        }
      }
    });
  });
})();

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let activeScrollFrame = null;

    function getHeaderOffset() {
      const header = document.querySelector(".xz-header");
      const topbar = document.querySelector(".xz-topbar");
      let offset = header ? header.offsetHeight : 0;

      if (topbar && window.getComputedStyle(topbar).display !== "none") {
        offset += topbar.offsetHeight;
      }

      return offset + 18;
    }

    function stopActiveScroll() {
      if (!activeScrollFrame) return;
      window.cancelAnimationFrame(activeScrollFrame);
      activeScrollFrame = null;
    }

    function scrollToTarget(target) {
      const startY = window.scrollY;
      const targetY = Math.max(0, target.getBoundingClientRect().top + startY - getHeaderOffset());
      const distance = targetY - startY;

      if (Math.abs(distance) < 2 || reduceMotion) {
        window.scrollTo(0, targetY);
        return;
      }

      stopActiveScroll();
      const duration = Math.min(1000, 700 + Math.abs(distance) / 10);
      const startedAt = window.performance.now();

      function easeInOutCubic(progress) {
        return progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      }

      function animate(now) {
        const progress = Math.min(1, (now - startedAt) / duration);
        window.scrollTo(0, startY + distance * easeInOutCubic(progress));

        if (progress < 1) activeScrollFrame = window.requestAnimationFrame(animate);
        else activeScrollFrame = null;
      }

      activeScrollFrame = window.requestAnimationFrame(animate);
    }

    document.addEventListener("click", function (event) {
      const link = event.target.closest("a[href]");
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (link.hasAttribute("data-no-smooth")) return;

      const rawHref = link.getAttribute("href");
      if (!rawHref || rawHref === "#") return;

      const url = new URL(rawHref, window.location.href);
      const samePage = url.origin === window.location.origin && url.pathname === window.location.pathname && url.search === window.location.search;
      if (!samePage || !url.hash) return;

      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;

      event.preventDefault();
      window.history.replaceState(null, "", url.hash);
      scrollToTarget(target);
    });

    window.addEventListener("wheel", stopActiveScroll, { passive: true });
    window.addEventListener("touchstart", stopActiveScroll, { passive: true });

    const revealSelectors = [
      "main > section > .max-w-container-max",
      "main > section > .catalog-container",
      "main > section > .about-container",
      "main > section > .contact-container",
      "main > .catalog-container",
      "main > .product-detail-breadcrumb > .catalog-container"
    ].join(",");
    const revealTargets = Array.from(document.querySelectorAll(revealSelectors)).filter(function (element) {
      return !element.hasAttribute("data-reveal");
    });

    if (revealTargets.length === 0) return;
    document.body.classList.add("xz-motion-ready");
    revealTargets.forEach(function (element) { element.classList.add("xz-reveal"); });

    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealTargets.forEach(function (element) { element.classList.add("is-visible"); });
      return;
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, {
      rootMargin: "0px 0px -9% 0px",
      threshold: 0.02
    });

    revealTargets.forEach(function (element) { observer.observe(element); });
  });
})();

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.toLowerCase().endsWith("/contact.html")) return;

    const modal = document.createElement("div");
    modal.className = "xz-inquiry-modal";
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
      <div class="xz-inquiry-modal__backdrop" data-inquiry-close></div>
      <div class="xz-inquiry-modal__panel" role="dialog" aria-modal="true" aria-labelledby="xz-inquiry-title">
        <button class="xz-inquiry-modal__close" type="button" data-inquiry-close aria-label="Close inquiry" title="Close"><span class="material-symbols-outlined">close</span></button>
        <div class="xz-inquiry-modal__header">
          <span>Quick Inquiry</span>
          <h2 id="xz-inquiry-title">Tell Us What You Are Looking For</h2>
          <p>Share the product, quantity and destination market. Your email app will open with the inquiry prepared.</p>
        </div>
        <form class="xz-inquiry-modal__form">
          <div class="xz-inquiry-modal__grid">
            <label><span>Name *</span><input name="name" type="text" autocomplete="name" required></label>
            <label><span>Business Email *</span><input name="email" type="email" autocomplete="email" required></label>
            <label><span>Company</span><input name="company" type="text" autocomplete="organization"></label>
            <label><span>Country / Region *</span><input name="country" type="text" autocomplete="country-name" required></label>
            <label><span>Product / Category</span><input name="product" type="text"></label>
            <label><span>Estimated Quantity</span><input name="quantity" type="text"></label>
            <label class="xz-inquiry-modal__full"><span>Requirement *</span><textarea name="message" required></textarea></label>
          </div>
          <div class="xz-inquiry-modal__footer">
            <p data-inquiry-modal-status>Required fields are marked with an asterisk.</p>
            <button type="submit">Prepare Inquiry Email <span class="material-symbols-outlined">arrow_forward</span></button>
          </div>
        </form>
      </div>`;
    document.body.appendChild(modal);

    const form = modal.querySelector("form");
    const panel = modal.querySelector(".xz-inquiry-modal__panel");
    const status = modal.querySelector("[data-inquiry-modal-status]");
    let lastTrigger = null;

    function openModal(trigger) {
      lastTrigger = trigger;
      form.reset();
      const productField = form.elements.namedItem("product");
      const detailTitle = document.querySelector("[data-detail-title]")?.textContent.trim();
      const categoryTitle = document.querySelector("[data-category-title]")?.textContent.trim();
      const triggerContext = trigger.getAttribute("data-inquiry-context") || "";
      productField.value = triggerContext || detailTitle || categoryTitle || "";
      status.textContent = "Required fields are marked with an asterisk.";
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("xz-modal-open");
      window.setTimeout(function () { panel.querySelector("input")?.focus(); }, 40);
    }

    function closeModal() {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("xz-modal-open");
      lastTrigger?.focus();
    }

    document.addEventListener("click", function (event) {
      const trigger = event.target.closest('a[href*="contact.html#inquiry"]');
      if (!trigger || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      openModal(trigger);
    });

    modal.querySelectorAll("[data-inquiry-close]").forEach(function (button) {
      button.addEventListener("click", closeModal);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        status.textContent = "Please complete the required fields.";
        return;
      }

      const value = function (name) {
        return form.elements.namedItem(name)?.value.trim() || "Not provided";
      };
      const subject = `Sourcing Inquiry - ${value("product") !== "Not provided" ? value("product") : value("name")}`;
      const body = [
        "Hello HUANGYAN SOURCING Team,",
        "",
        "I would like to discuss a sourcing requirement.",
        "",
        `Name: ${value("name")}`,
        `Email: ${value("email")}`,
        `Company: ${value("company")}`,
        `Country / Region: ${value("country")}`,
        `Product / Category: ${value("product")}`,
        `Estimated Quantity: ${value("quantity")}`,
        "",
        "Requirement:",
        value("message"),
        "",
        "Best regards,",
        value("name")
      ].join("\n");

      status.textContent = "Your email app will open with this inquiry filled in.";
      window.location.href = `mailto:info@huangyansourcing.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  });
})();
