const burger = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');
const noScroll = document.querySelector('.body');
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  headerNav.classList.toggle('active');
  noScroll.classList.toggle('lock');
});