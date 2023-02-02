import { fetchTrending } from './fetch-api';

const ulEl = document.querySelector('.pagination__list');

let allPages = 15;
let pageNumber = +1;

function elem(allPages, page) {
  let beforePages = page - 1;
  let afterPages = page + 3;
  let liActive;

  if (page > 1) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    li.classList.add('btn__left');
    span.innerHTML = `  <img class="btn__img" src="./images/arrow-left.png" alt=""
    />`;
    li.appendChild(span);
    li.addEventListener('click', () => {
      if (pageNumber === 1) {
        fetchTrending();
      } else fetchTrending((pageNumber = pageNumber - 1));
    });
    ulEl.appendChild(li);
  }
  for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
    if (pageLength > allPages) {
      continue;
    }
    if (pageLength == 0) {
      pageLength = pageLength + 1;
    }

    if (page === pageLength) {
      liActive = 'btn__active';
    } else {
      liActive = '';
    }
    const li = document.createElement('li');
    const span = document.createElement('span');
    li.classList.add('numb');
    span.innerHTML = ` ${pageLength}`;
    li.appendChild(span);
    li.addEventListener('click', () => {
      if (pageLength === pageNumber) {
        li.classList.add('btn__active');
        fetchTrending((pageNumber = pageLength));
      } else {
        li.classList.remove('btn__active');
      }
    });

    ulEl.appendChild(li);
  }
  if (page < allPages) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    li.classList.add('btn__right');
    span.innerHTML = `  <img class="btn__img" src="./src/images/arrow-right.png" alt=""
    />`;
    li.appendChild(span);
    li.addEventListener('click', () => {
      fetchTrending((pageNumber = pageNumber + 1));
    });
    ulEl.appendChild(li);
  }
}

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
