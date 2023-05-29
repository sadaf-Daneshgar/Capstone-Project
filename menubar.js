const menuBtn = document.querySelector('.humbargar-menu');
const menu = document.querySelector('.menu-bottom');
const menuOpts = document.querySelectorAll('.nav-menu');
const body = document.querySelector('body');

function openMenu() {
  body.classList.add('active');
  menu.classList.add('show-menu-modal');
}

function closeMenu() {
  menu.classList.remove('show-menu-modal');
  body.classList.remove('active');
}

menuBtn.addEventListener('click', openMenu);
menuOpts.forEach((menuOpt) => menuOpt.addEventListener('click', closeMenu));