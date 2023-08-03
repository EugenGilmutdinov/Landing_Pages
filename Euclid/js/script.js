const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}'
  }
});

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('tabs-nav__btn--active') });
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('tabs-item--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});

const hamburger = document?.querySelector('[data-hamburger]');
const menu = document?.querySelector('[data-header__nav]');
const menuLinks = menu?.querySelectorAll('.header__nav .nav__link');

hamburger?.addEventListener('click', () => {

    hamburger?.classList.toggle('is-active');

    menu?.classList.toggle('nav--visible');
    menu.style.transition = 'transform 0.3s ease-in-out, visibility 0.3s ease-in-out';

    document.body.classList.toggle('stop-scroll');
  });

menu.addEventListener('transitionend', function () {
  if (!menu.classList.contains('nav--visible')) {
    menu.removeAttribute('style');
  }
})

menuLinks.forEach(el => {
  el.addEventListener('click', () => {

    hamburger?.classList.remove('is-active');

    menu?.classList.remove('nav--visible');

    document.body.classList.remove('stop-scroll');

  });
});


const searchBtn = document.querySelector('.search-btn');
const searchButton = document.querySelector('.search-button');
const closedButton = document.querySelector('.closed-button');
const searchInput = document.querySelector('.search-input');


searchBtn.addEventListener('click',

function() {
  searchBtn.classList.toggle('search-btn--noactive')

  searchInput.classList.toggle('search-input--active');

  searchButton.classList.toggle('search-button--active');

  closedButton.classList.toggle('closed-button--active');

})

closedButton.addEventListener('click',

function() {
  searchBtn.classList.remove('search-btn--noactive')

  searchInput.classList.remove('search-input--active');

  searchButton.classList.remove('search-button--active');

  closedButton.classList.remove('closed-button--active');

})
