const homeBtn = document.querySelector('.nav__btn--home');
const libraryBtn = document.querySelector('.nav__btn--library');
const form = document.querySelector('.form__wrapper');
const library = document.querySelector('.library');
const header = document.querySelector('.header__home');

const libraryRender = () => {
  homeBtn.classList.remove('nav__btn--home--current');
  libraryBtn.classList.add('nav__btn--library--current');
  form.classList.add('visually-hidden');
  library.classList.remove('visually-hidden');
  header.classList.remove('header__home');
  header.classList.add('header__library');
};
libraryBtn.addEventListener('click', libraryRender);

const homeRender = () => {
  libraryBtn.classList.remove('nav__btn--library--current');
  homeBtn.classList.add('nav__btn--home--current');
  form.classList.remove('visually-hidden');
  library.classList.add('visually-hidden');
  header.classList.add('header__home');
  header.classList.remove('header__library');
};
homeBtn.addEventListener('click', homeRender);
