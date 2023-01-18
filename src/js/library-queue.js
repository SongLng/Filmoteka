const refs = {
  libraryBtn: document.querySelector('.btn__library--library'),
  queueBtn: document.querySelector('.btn__library--queue'),
};

const queueRender = () => {
  refs.libraryBtn.classList.remove('active');
  refs.queueBtn.classList.add('active');
};

refs.queueBtn.addEventListener('click', queueRender);

const libraryRender = () => {
  refs.queueBtn.classList.remove('active');
  refs.libraryBtn.classList.add('active');
};

refs.libraryBtn.addEventListener('click', libraryRender);
