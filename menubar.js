const menuBtn = document.querySelector('.humbargar-menu');
const menu = document.querySelector('.menu-bottom');
const menuOpts = document.querySelectorAll('.nav-menu');
const body = document.querySelector('body');
// on the top i add the variable for humbarger menu
function toggleMenu() {
  menu.classList.toggle('show-menu-modal');
  body.classList.toggle('active');
}

// add the eventlistener method and action for humbarger menu that which we click it show appear
menuBtn.addEventListener('click', toggleMenu);
menuOpts.forEach((menuOpt) => menuOpt.addEventListener('click', toggleMenu));
