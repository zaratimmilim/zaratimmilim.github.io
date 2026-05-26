// =====================================================
// Minimal site script — no dependencies
// =====================================================

// 1. Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// 2. Active section highlight in nav
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav__links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach((link) => {
        link.classList.toggle(
          'is-active',
          link.getAttribute('href') === `#${id}`
        );
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach((s) => observer.observe(s));

// Add a tiny style for .is-active (could also go in CSS)
const style = document.createElement('style');
style.textContent = `.nav__links a.is-active { color: var(--accent); }`;
document.head.appendChild(style);
