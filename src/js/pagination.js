import { fetchTrending } from './fetch-api';
const btnLeftEl = document.querySelector('.btn__left');

const btnRightEl = document.querySelector('.btn__right');
const ulEl = document.querySelector('.pagination__list');

let allPages = 15;

function elem(allPages, page) {
  let li = '';

  let beforePages = page - 1;
  let afterPages = page + 3;
  let liActive;

  if (page > 1) {
    li += ` <li class="btn__left" onclick="elem(allPages,${page - 1})">
    <span class="btn__left">
      <img class="btn__img" src="./images/arrow-left.png" alt=""
    /></span>
  </li>`;
  }
  for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
    if (page === pageLength) {
      liActive = 'active';
    } else {
      liActive = '';
    }
    li += `<li class="numb ${liActive}"><span>${pageLength}</span></li>`;
  }
  if (page < allPages) {
    li += `  <li class="btn__right" onclick="elem(allPages,${page + 1})">
    <span>
      <img class="btn__img" src="./images/arrow-right.png" alt=""
    /></span>
  </li>`;
  }
  ulEl.innerHTML = li;
}

// btnLeftEl.addEventListener('click', elem(allPages, page - 1));
elem(allPages, 2);

// function paginationRight() {
//   const pagButtons = document.createElement('li');
//   pagButtons.classList.add('btn');

//   pagButtons.textContent = paginationNumber += 1;
//   paginationList.appendChild(pagButtons);
//   paginationList.firstElementChild.remove();
//   pageNumber += 1;

//   return fetchTrending();
// }

// function paginationLeft() {
//   const pagButtons = document.createElement('li');
//   pagButtons.classList.add('btn');
//   pagButtons.textContent = paginationNumber;
//   paginationList.appendChild(pagButtons);
//   paginationList.lastElementChild.remove();
//   pageNumber -= 1;

//   return fetchTrending();
// }
