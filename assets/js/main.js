document.addEventListener("DOMContentLoaded", () => {
  // Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true" || false;
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("show");
    });
  }

  // Projects modal
  const modal = document.getElementById("projectModal");
  const titleEl = document.getElementById("modalTitle");
  const descEl = document.getElementById("modalDesc");
  const closeBtn = modal ? modal.querySelector(".close") : null;

  document.querySelectorAll(".project").forEach((card) => {
    card.addEventListener("click", () => {
      if (!modal) return;
      titleEl.textContent = card.dataset.title || "Project";
      descEl.textContent = card.dataset.desc || "";
      modal.setAttribute("aria-hidden", "false");
      modal.classList.add("open");
    });
  });
  if (closeBtn)
    closeBtn.addEventListener("click", () => {
      modal.setAttribute("aria-hidden", "true");
      modal.classList.remove("open");
    });
  if (modal)
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.setAttribute("aria-hidden", "true");
        modal.classList.remove("open");
      }
    });

  // Contact form validation
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      let valid = true;

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const subject = document.getElementById("subject");
      const message = document.getElementById("message");

      const nameError = document.getElementById("nameError");
      const emailError = document.getElementById("emailError");
      const subjectError = document.getElementById("subjectError");
      const messageError = document.getElementById("messageError");

      // Name
      if (!name.value.trim()) {
        nameError.textContent = "Name is required.";
        valid = false;
      } else nameError.textContent = "";
      // Email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim()) {
        emailError.textContent = "Email is required.";
        valid = false;
      } else if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Enter a valid email.";
        valid = false;
      } else emailError.textContent = "";
      // Subject
      if (!subject.value.trim()) {
        subjectError.textContent = "Subject is required.";
        valid = false;
      } else subjectError.textContent = "";
      // Message
      if (!message.value.trim()) {
        messageError.textContent = "Message cannot be empty.";
        valid = false;
      } else messageError.textContent = "";

      if (!valid) e.preventDefault();
      else {
        e.preventDefault(); // demo only
        alert(
          "Thanks! This is a demo — connect this form to your backend or service."
        );
        form.reset();
      }
    });
  }
});
