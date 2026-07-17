// =====================================================
// Portafolio — Interactividad
// Menú móvil, enlace activo al hacer scroll y animación
// de aparición de secciones.
// =====================================================

// ----- Menú móvil -----
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Cierra el menú al hacer clic en un enlace (útil en móvil)
navMenu.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => navMenu.classList.remove("open"));
});

// ----- Enlace activo según la sección visible -----
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav__link");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => sectionObserver.observe(section));

// ----- Animación de aparición al hacer scroll -----
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
