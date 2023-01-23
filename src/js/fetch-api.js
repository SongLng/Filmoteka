import axios from 'axios';

// axios
//   .get(
//     `https://api.themoviedb.org/3/trending/${movie}/${week}/?api_key=8a851f7b54845db9a7afea3bd46f2426/`
//   )
//   .then(response => {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

// console.log(axios);
const trendingList = document.querySelector('.card__list');

const API_KEY = '8a851f7b54845db9a7afea3bd46f2426';

function fetchTrending() {
  fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-US&page=1`
  )
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(data => renderTrending(data.results))
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

fetchTrending();

function renderTrending(trends) {
  const markup = trends
    .map(trend => {
      return ` <li class="card__list--item">
    <div class="card__wrapper">
      <img class="card__img" src="${trend.poster_path}" alt="poster" />
      <h3 class="card__title">${trend.original_title}</h3>
      <p class="card__genre"><span>${trend.genere_ids}</span> | <span>${trend.release_date}</span></p>
    </div>
  </li>`;
    })
    .join('');

  return (trendingList.innerHTML = markup);
}
