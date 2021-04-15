'use strict';

const navMenu = document.querySelector('.js-nav__menu');
const navList = document.querySelector('.js-nav__list');

const displayMenu = () => {
  navList.classList.toggle('u-hidden');
  navList.classList.contains('u-hidden')
    ? (navMenu.src = 'images/navigation.svg')
    : (navMenu.src = 'images/close.svg');
};

navMenu.addEventListener('click', displayMenu);
