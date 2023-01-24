import renderTrending from './card-render';

const API_KEY = '8a851f7b54845db9a7afea3bd46f2426';

let pageNumber = 1;

function fetchTrending() {
  fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-US&page=${pageNumber}`
  )
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(data => renderTrending(data.results))
    // .then(data => console.log(data))
    .catch(error => console.log(error));
}

fetchTrending();

const btnLeftEl = document.querySelector('.btn__left');
const btnRightEl = document.querySelector('.btn__right');
const paginationList = document.querySelector('.pagination__list');
let paginationNumber = 5;

btnRightEl.addEventListener('click', paginationRight);
btnLeftEl.addEventListener('click', paginationLeft);

function paginationRight() {
  const pagButtons = document.createElement('li');
  pagButtons.classList.add('btn');

  pagButtons.textContent = paginationNumber += 1;
  paginationList.appendChild(pagButtons);
  paginationList.firstElementChild.remove();
  pageNumber += 1;

  return fetchTrending();
}

function paginationLeft() {
  const pagButtons = document.createElement('li');
  pagButtons.classList.add('btn');
  pagButtons.textContent = paginationNumber;
  paginationList.appendChild(pagButtons);
  paginationList.lastElementChild.remove();
  pageNumber -= 1;

  return fetchTrending();
}
