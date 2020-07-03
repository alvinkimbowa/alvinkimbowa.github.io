const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const navRemove = document.querySelector('.intro');

navToggle.addEventListener('click', () => document.body.classList.toggle('nav-open'));

navLinks.forEach((link, i) => {
  link.addEventListener('click', () => document.body.classList.remove('nav-open'));
});

navRemove.addEventListener('click', () => document.body.classList.remove('nav-open'));
