(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("[data-contact-form]");
    if (!form) return;

    const status = form.querySelector("[data-contact-status]");
    const fields = Array.from(form.querySelectorAll("[data-contact-field]"));
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function setFieldState(field, message) {
      const wrapper = field.closest(".contact-field");
      if (!wrapper) return;

      const error = wrapper.querySelector(".contact-field__error");
      const isInvalid = Boolean(message);
      wrapper.classList.toggle("is-invalid", isInvalid);
      field.setAttribute("aria-invalid", isInvalid ? "true" : "false");
      if (error) error.textContent = message || "";
    }

    function validateField(field) {
      const label = field.dataset.label || "This field";
      const value = field.value.trim();

      if (field.required && !value) {
        setFieldState(field, `${label} is required.`);
        return false;
      }

      if (field.type === "email" && value && !emailPattern.test(value)) {
        setFieldState(field, "Enter a valid email address.");
        return false;
      }

      setFieldState(field, "");
      return true;
    }

    fields.forEach(function (field) {
      field.addEventListener("input", function () {
        if (field.closest(".contact-field")?.classList.contains("is-invalid")) {
          validateField(field);
        }
      });

      field.addEventListener("change", function () {
        validateField(field);
      });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const valid = fields.map(validateField).every(Boolean);

      if (!valid) {
        const firstInvalid = form.querySelector(".contact-field.is-invalid input, .contact-field.is-invalid select, .contact-field.is-invalid textarea");
        firstInvalid?.focus();
        if (status) {
          status.textContent = "Please complete the highlighted fields.";
          status.dataset.state = "error";
        }
        return;
      }

      const value = function (name) {
        return form.elements.namedItem(name)?.value.trim() || "Not provided";
      };

      const subject = `Sourcing Inquiry - ${value("name")}`;
      const body = [
        "Hello HUANGYAN SOURCING Team,",
        "",
        "I would like to discuss a sourcing requirement.",
        "",
        `Name: ${value("name")}`,
        `Email: ${value("email")}`,
        `Company: ${value("company")}`,
        `Country / Region: ${value("country")}`,
        `Product Category: ${value("category")}`,
        `Estimated Quantity: ${value("quantity")}`,
        "",
        "Requirement:",
        value("message"),
        "",
        "Best regards,",
        value("name")
      ].join("\n");

      if (status) {
        status.textContent = "Your email app will open with this inquiry filled in.";
        status.dataset.state = "success";
      }

      window.location.href = `mailto:info@huangyansourcing.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  });
})();
