(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const catalog = window.HuangyanCatalog;
    if (!catalog) return;

    const params = new URLSearchParams(window.location.search);
    const requestedCategory = params.get("category");
    const initialQuery = params.get("q") || "";
    const isGlobalSearch = !requestedCategory && Boolean(initialQuery);
    const category = catalog.getCategory(requestedCategory || "maternity-baby");
    const sourceProducts = isGlobalSearch
      ? catalog.categories.flatMap(function (item) { return item.products; })
      : category.products.slice();

    const state = {
      query: initialQuery.toLowerCase(),
      sort: "default",
      page: 1,
      perPage: 9,
      view: "grid"
    };

    const heroImage = document.querySelector("[data-category-cover]");
    const heroTitle = document.querySelector("[data-category-title]");
    const heroDescription = document.querySelector("[data-category-description]");
    const breadcrumbCategory = document.querySelector("[data-breadcrumb-category]");
    const searchInput = document.querySelector("[data-list-search]");
    const categoryNavigation = document.querySelector("[data-category-navigation]");
    const resultCount = document.querySelector("[data-result-count]");
    const grid = document.querySelector("[data-list-grid]");
    const emptyState = document.querySelector("[data-empty-state]");
    const pagination = document.querySelector("[data-pagination]");
    const sortSelect = document.querySelector("[data-sort]");
    const viewButtons = Array.from(document.querySelectorAll("[data-view-mode]"));

    document.title = isGlobalSearch
      ? `Product Search | HUANGYAN SOURCING`
      : `${category.title} Products | HUANGYAN SOURCING`;

    if (heroImage) {
      heroImage.src = isGlobalSearch
        ? "./assets/images/categories/living-room-products.webp"
        : category.cover;
      heroImage.alt = isGlobalSearch
        ? "HUANGYAN SOURCING product search"
        : `${category.title} sourcing category`;
    }
    if (heroTitle) heroTitle.textContent = isGlobalSearch ? "Product Search" : category.title;
    if (heroDescription) {
      heroDescription.textContent = isGlobalSearch
        ? "Search across HUANGYAN SOURCING product references and continue with a focused sourcing requirement."
        : category.description;
    }
    if (breadcrumbCategory) breadcrumbCategory.textContent = isGlobalSearch ? "Search Results" : category.title;
    if (searchInput) searchInput.value = initialQuery;

    if (categoryNavigation) {
      categoryNavigation.innerHTML = catalog.categories.map(function (item) {
        const isActive = !isGlobalSearch && item.slug === category.slug;
        return `
          <a class="catalog-category-nav__link ${isActive ? "is-active" : ""}" href="${catalog.categoryUrl(item)}">
            <span class="material-symbols-outlined">${item.icon}</span>
            <span>${item.title}</span>
            <b>${item.products.length}</b>
          </a>`;
      }).join("");
    }

    function productCard(product) {
      const productCategory = catalog.getCategory(product.category);
      return `
        <a class="catalog-product-card" href="${catalog.productUrl(product)}" data-focus="${product.focus}">
          <div class="catalog-product-card__media">
            <img src="${product.image}" alt="${product.title}">
            <span class="catalog-product-card__focus">${product.focus}</span>
          </div>
          <div class="catalog-product-card__body">
            <span class="catalog-product-card__category">${productCategory.title}</span>
            <h3>${product.title}</h3>
            <p class="catalog-product-card__summary">${product.summary}</p>
            <div class="catalog-product-card__meta">
              <span>${product.code}</span>
              <span class="material-symbols-outlined">arrow_forward</span>
            </div>
          </div>
        </a>`;
    }

    function filteredProducts() {
      const matches = sourceProducts.filter(function (product) {
        const categoryTitle = catalog.getCategory(product.category).title;
        const searchable = `${product.title} ${product.focus} ${categoryTitle} ${product.code}`.toLowerCase();
        const matchesQuery = !state.query || searchable.includes(state.query);
        return matchesQuery;
      });

      if (state.sort === "name-asc") {
        matches.sort(function (a, b) { return a.title.localeCompare(b.title); });
      } else if (state.sort === "name-desc") {
        matches.sort(function (a, b) { return b.title.localeCompare(a.title); });
      }

      return matches;
    }

    function renderPagination(total) {
      if (!pagination) return;
      const pages = Math.max(1, Math.ceil(total / state.perPage));
      state.page = Math.min(state.page, pages);

      if (pages <= 1) {
        pagination.innerHTML = "";
        return;
      }

      let html = `<button type="button" data-page="prev" aria-label="Previous page" ${state.page === 1 ? "disabled" : ""}><span class="material-symbols-outlined">chevron_left</span></button>`;
      for (let page = 1; page <= pages; page += 1) {
        html += `<button type="button" data-page="${page}" class="${page === state.page ? "is-active" : ""}">${page}</button>`;
      }
      html += `<button type="button" data-page="next" aria-label="Next page" ${state.page === pages ? "disabled" : ""}><span class="material-symbols-outlined">chevron_right</span></button>`;
      pagination.innerHTML = html;

      pagination.querySelectorAll("button:not([disabled])").forEach(function (button) {
        button.addEventListener("click", function () {
          const target = button.dataset.page;
          if (target === "prev") state.page -= 1;
          else if (target === "next") state.page += 1;
          else state.page = Number(target);
          render();
          window.scrollTo({ top: document.querySelector(".catalog-list-section").offsetTop - 118, behavior: "smooth" });
        });
      });
    }

    function render() {
      const products = filteredProducts();
      const start = (state.page - 1) * state.perPage;
      const visible = products.slice(start, start + state.perPage);

      if (resultCount) {
        resultCount.innerHTML = `<strong>${products.length}</strong> product references`;
      }
      if (grid) {
        grid.innerHTML = visible.map(productCard).join("");
        grid.classList.toggle("is-list-view", state.view === "list");
      }
      if (emptyState) emptyState.classList.toggle("is-visible", products.length === 0);
      renderPagination(products.length);
    }

    if (searchInput) {
      searchInput.addEventListener("input", function () {
        state.query = searchInput.value.trim().toLowerCase();
        state.page = 1;
        render();
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener("change", function () {
        state.sort = sortSelect.value;
        state.page = 1;
        render();
      });
    }

    viewButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        state.view = button.dataset.viewMode;
        viewButtons.forEach(function (item) {
          item.classList.toggle("is-active", item === button);
        });
        render();
      });
    });

    render();
  });
})();
