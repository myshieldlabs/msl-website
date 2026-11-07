// MyShieldLabs website settings
// Add your real public business email below before publishing.
// Example: const CONTACT_EMAIL = "hello@yourdomain.com";
const CONTACT_EMAIL = "";

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const emailLink = document.getElementById("email-link");
const contactNote = document.getElementById("contact-note");
if (CONTACT_EMAIL.trim()) {
  emailLink.href = `mailto:${CONTACT_EMAIL.trim()}`;
  contactNote.hidden = true;
} else {
  emailLink.addEventListener("click", (event) => {
    event.preventDefault();
    contactNote.hidden = false;
    contactNote.textContent = "The website owner has not added a public contact email yet.";
  });
}

// Subtle reveal-on-scroll, with a no-motion fallback for accessibility.
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealItems = document.querySelectorAll(".focus-card, .step, .feature-strip > div");
  revealItems.forEach((item) => item.classList.add("reveal"));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
}
