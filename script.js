// Smooth active nav feel + simple scroll reveal
const cards = document.querySelectorAll('.card, .definition-card, .soft-panel, .hero-card');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

cards.forEach((card) => {
  card.classList.add('reveal');
  revealObserver.observe(card);
});
