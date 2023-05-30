const menuBtn = document.querySelector('.humbargar-menu');
const menu = document.querySelector('.menu-bottom');
const menuOpts = document.querySelectorAll('.nav-menu');
const body = document.querySelector('body');

function toggleMenu() {
  menu.classList.toggle('show-menu-modal');
  body.classList.toggle('active');
}

menuBtn.addEventListener('click', toggleMenu);
menuOpts.forEach((menuOpt) => menuOpt.addEventListener('click', toggleMenu));