const btn = document.querySelector('.menu-btn');
const links = document.querySelector('.nav-links');

btn?.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open');
  btn?.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();
