(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const catalog = window.HuangyanCatalog;
    if (!catalog) return;

    const params = new URLSearchParams(window.location.search);
    const category = catalog.getCategory(params.get("category") || "maternity-baby");
    const product = catalog.getProduct(category.slug, params.get("product") || category.products[0].id);
    const productIndex = category.products.findIndex(function (item) { return item.id === product.id; });
    const related = category.products.filter(function (item) { return item.id !== product.id; }).slice(0, 4);
    const galleryImages = [
      { src: product.image, alt: product.title },
      { src: category.cover, alt: `${category.title} sourcing collection` }
    ];

    function setText(selector, value) {
      document.querySelectorAll(selector).forEach(function (element) {
        element.textContent = value;
      });
    }

    function setAttribute(selector, name, value) {
      document.querySelectorAll(selector).forEach(function (element) {
        element.setAttribute(name, value);
      });
    }

    document.title = `${product.title} | HUANGYAN SOURCING`;

    setText("[data-detail-category]", category.title);
    setText("[data-detail-title]", product.title);
    setText("[data-detail-code]", product.code);
    setText("[data-detail-description]", product.summary);
    setText("[data-detail-moq]", product.sourcing.moq);
    setText("[data-detail-sample]", product.sourcing.sample);
    setText("[data-detail-customization]", product.sourcing.customization);
    setText("[data-detail-lead-time]", product.sourcing.leadTime);
    setText("[data-inquiry-product-name]", product.title);
    setText("[data-product-description-copy]", `${product.title} can be sourced for distributor, retail and e-commerce programs with specifications confirmed according to the target market and purchasing brief.`);
    setAttribute("[data-detail-category-link]", "href", catalog.categoryUrl(category));
    setAttribute("[data-main-product-image]", "src", product.image);
    setAttribute("[data-main-product-image]", "alt", product.title);
    setAttribute("[data-inquiry-product-image]", "src", product.image);
    setAttribute("[data-inquiry-product-image]", "alt", product.title);

    const thumbs = document.querySelector("[data-gallery-thumbs]");
    const mainImage = document.querySelector("[data-main-product-image]");
    const lightbox = document.querySelector("[data-product-lightbox]");
    const lightboxImage = document.querySelector("[data-lightbox-image]");

    if (thumbs && mainImage) {
      thumbs.innerHTML = galleryImages.map(function (image, index) {
        return `<button class="product-gallery__thumb ${index === 0 ? "is-active" : ""}" type="button" data-gallery-image="${image.src}" aria-label="View image ${index + 1}"><img src="${image.src}" alt="${image.alt}"></button>`;
      }).join("");

      thumbs.querySelectorAll("[data-gallery-image]").forEach(function (button) {
        button.addEventListener("click", function () {
          mainImage.src = button.dataset.galleryImage;
          mainImage.alt = button.querySelector("img").alt;
          thumbs.querySelectorAll("button").forEach(function (item) {
            item.classList.toggle("is-active", item === button);
          });
        });
      });
    }

    const zoomButton = document.querySelector("[data-gallery-zoom]");
    if (zoomButton && lightbox && lightboxImage) {
      zoomButton.addEventListener("click", function () {
        lightboxImage.src = mainImage.src;
        lightboxImage.alt = mainImage.alt;
        if (typeof lightbox.showModal === "function") lightbox.showModal();
      });
    }

    const lightboxClose = document.querySelector("[data-lightbox-close]");
    if (lightboxClose && lightbox) {
      lightboxClose.addEventListener("click", function () { lightbox.close(); });
    }

    document.querySelectorAll("[data-product-tab]").forEach(function (button) {
      button.addEventListener("click", function () {
        const panelId = button.dataset.productTab;
        document.querySelectorAll("[data-product-tab]").forEach(function (item) {
          item.classList.toggle("is-active", item === button);
          item.setAttribute("aria-selected", item === button ? "true" : "false");
        });
        document.querySelectorAll("[data-tab-panel]").forEach(function (panel) {
          panel.classList.toggle("is-active", panel.dataset.tabPanel === panelId);
        });
      });
    });

    const specifications = [
      ["Product reference", product.code],
      ["Category", category.title],
      ["Product focus", product.focus],
      ["Material", productIndex === 0 && category.slug === "maternity-baby" ? "Borosilicate glass and food-grade components" : "Confirmed according to selected specification"],
      ["Color options", "Standard colors or customized color matching"],
      ["Logo method", "Printing, label or packaging application"],
      ["MOQ", product.sourcing.moq],
      ["Sample", product.sourcing.sample],
      ["Packaging", "Standard export packaging or customized retail packaging"],
      ["Lead time", product.sourcing.leadTime]
    ];

    document.querySelectorAll("[data-spec-table]").forEach(function (specTable) {
      specTable.innerHTML = specifications.map(function (row) {
        return `<div class="product-spec-table__row"><dt>${row[0]}</dt><dd>${row[1]}</dd></div>`;
      }).join("");
    });

    const relatedGrid = document.querySelector("[data-related-products]");
    if (relatedGrid) {
      relatedGrid.innerHTML = related.map(function (item) {
        return `
          <a class="catalog-product-card" href="${catalog.productUrl(item)}">
            <div class="catalog-product-card__media">
              <img src="${item.image}" alt="${item.title}">
              <span class="catalog-product-card__focus">${item.focus}</span>
            </div>
            <div class="catalog-product-card__body">
              <span class="catalog-product-card__category">${category.title}</span>
              <h3>${item.title}</h3>
              <div class="catalog-product-card__meta"><span>${item.code}</span><span class="material-symbols-outlined">arrow_forward</span></div>
            </div>
          </a>`;
      }).join("");
    }

    const inquiryForm = document.querySelector("[data-product-inquiry]");
    const inquiryStatus = document.querySelector("[data-inquiry-status]");
    if (inquiryForm) {
      const productField = inquiryForm.querySelector("[name='product']");
      if (productField) productField.value = `${product.title} (${product.code})`;

      inquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!inquiryForm.checkValidity()) {
          inquiryForm.reportValidity();
          return;
        }

        const value = function (name) {
          return inquiryForm.elements.namedItem(name)?.value.trim() || "Not provided";
        };

        const subject = `Product Inquiry - ${product.title}`;
        const body = [
          "Hello HUANGYAN SOURCING Team,",
          "",
          "I would like to request sourcing support for the following product.",
          "",
          `Product: ${product.title}`,
          `Product Ref: ${product.code}`,
          `Name: ${value("name")}`,
          `Email: ${value("email")}`,
          `Company: ${value("company")}`,
          `Target Quantity: ${value("quantity")}`,
          "",
          "Requirement:",
          value("message"),
          "",
          "Best regards,",
          value("name")
        ].join("\n");

        if (inquiryStatus) inquiryStatus.textContent = "Your email app will open with this product inquiry filled in.";
        window.location.href = `mailto:info@huangyansourcing.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      });
    }
  });
})();
