(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const catalog = window.HuangyanCatalog;
    const categoryGrid = document.querySelector("[data-category-directory]");
    const featuredGrid = document.querySelector("[data-featured-products]");
    const searchForm = document.querySelector("[data-catalog-search-form]");

    if (!catalog) return;

    function productCard(product) {
      const category = catalog.getCategory(product.category);
      return `
        <a class="catalog-product-card" href="${catalog.productUrl(product)}">
          <div class="catalog-product-card__media">
            <img src="${product.image}" alt="${product.title}">
            <span class="catalog-product-card__focus">${product.focus}</span>
          </div>
          <div class="catalog-product-card__body">
            <span class="catalog-product-card__category">${category.title}</span>
            <h3>${product.title}</h3>
            <div class="catalog-product-card__meta">
              <span>MOQ: ${product.sourcing.moq}</span>
              <span class="material-symbols-outlined">arrow_forward</span>
            </div>
          </div>
        </a>`;
    }

    if (categoryGrid) {
      categoryGrid.innerHTML = catalog.categories.map(function (category) {
        return `
          <a class="category-directory-card" href="${catalog.categoryUrl(category)}" data-category-slug="${category.slug}">
            <div class="category-directory-card__media">
              <img src="${category.cover}" alt="${category.title} category cover">
            </div>
            <div class="category-directory-card__body">
              <div>
                <h3>${category.title}</h3>
                <span class="category-directory-card__meta">${category.products.length} sourcing references</span>
              </div>
              <span class="category-directory-card__arrow"><span class="material-symbols-outlined">arrow_forward</span></span>
            </div>
          </a>`;
      }).join("");
    }

    if (featuredGrid) {
      featuredGrid.innerHTML = catalog.getFeaturedProducts().map(productCard).join("");
    }

    if (searchForm) {
      searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const input = searchForm.querySelector("input");
        const query = input ? input.value.trim() : "";
        const destination = query
          ? `./product-list.html?q=${encodeURIComponent(query)}`
          : "./product-list.html?category=maternity-baby";
        window.location.href = destination;
      });
    }
  });
})();
