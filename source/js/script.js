import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles

const swiper = new Swiper('.swiper', {
  // Optional parameters
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
