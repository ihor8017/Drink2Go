let navMain = document.querySelector('.header-navigation__list');
let navToggle = document.querySelector('.header-navigation__toggle');
let mainContent = document.querySelector('.main-container');

navMain.classList.remove("no-js");
navToggle.classList.remove('header-navigation__toggle--open');
navToggle.classList.add('header-navigation__toggle--close');
mainContent.classList.remove("no-js");

navToggle.addEventListener('click',() =>{
  if (navToggle.classList.contains('header-navigation__toggle--close')) {
    navToggle.classList.remove('header-navigation__toggle--close');
    navToggle.classList.add('header-navigation__toggle--open');
    navMain.classList.add('header-navigation__list--open');
  }
  else {
    navToggle.classList.remove('header-navigation__toggle--open');
    navToggle.classList.add('header-navigation__toggle--close');
    navMain.classList.remove('header-navigation__list--open');
  }
});
