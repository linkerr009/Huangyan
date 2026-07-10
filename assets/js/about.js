(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const counters = Array.from(document.querySelectorAll("[data-count]"));
    if (counters.length === 0) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function renderCounter(element, value) {
      const suffix = element.dataset.suffix || "";
      element.textContent = `${Math.round(value).toLocaleString("en-US")}${suffix}`;
    }

    function animateCounter(element) {
      if (element.dataset.counted === "true") return;
      element.dataset.counted = "true";

      const target = Number(element.dataset.count || 0);
      const start = Number(element.dataset.start || 0);

      if (reduceMotion || target <= start) {
        renderCounter(element, target);
        return;
      }

      const duration = 1100;
      const startedAt = window.performance.now();

      function frame(now) {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        renderCounter(element, start + (target - start) * eased);

        if (progress < 1) {
          window.requestAnimationFrame(frame);
        }
      }

      window.requestAnimationFrame(frame);
    }

    if (!("IntersectionObserver" in window)) {
      counters.forEach(animateCounter);
      return;
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.35 });

    counters.forEach(function (counter) {
      observer.observe(counter);
    });
  });
})();
