(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));
    const serviceLinks = Array.from(document.querySelectorAll("[data-service-link]"));

    body.classList.add("is-enhanced");

    function showAllRevealItems() {
      revealItems.forEach(function (item) {
        item.classList.add("is-visible");
      });
    }

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      showAllRevealItems();
    } else {
      const revealObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      }, {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.08
      });

      revealItems.forEach(function (item) {
        revealObserver.observe(item);
      });
    }

    const serviceTargets = serviceLinks
      .map(function (link) {
        const id = link.getAttribute("href").slice(1);
        return id ? document.getElementById(id) : null;
      })
      .filter(Boolean);

    function setActiveService(id) {
      serviceLinks.forEach(function (link) {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
      });
    }

    if ("IntersectionObserver" in window && serviceTargets.length > 0) {
      const serviceObserver = new IntersectionObserver(function (entries) {
        const visible = entries
          .filter(function (entry) { return entry.isIntersecting; })
          .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; });

        if (visible[0]) setActiveService(visible[0].target.id);
      }, {
        rootMargin: "-26% 0px -54% 0px",
        threshold: [0.02, 0.18, 0.4]
      });

      serviceTargets.forEach(function (target) {
        serviceObserver.observe(target);
      });
    }
  });
})();
