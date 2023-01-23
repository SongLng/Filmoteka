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
      const genres = {
        28: 'Action',
        12: 'Adventure',
        16: 'Animation',
        35: 'Comedy',
        80: 'Crime',
        99: 'Documentary',
        18: 'Drama',
        10751: 'Family',
        14: 'Fantasy',
        36: 'History',
        27: 'Horror',
        10402: 'Music',
        9648: 'Mystery',
        10749: 'Romance',
        878: 'Science Fiction',
        10770: 'TV Movie',
        53: 'Thriller',
        10752: 'War',
        37: 'Western',
      };
      const { original_title, genre_ids, release_date } = trend;
      return ` <li class="card__list--item">
    <div class="card__wrapper">
      <img class="card__img" src="https://image.tmdb.org/t/p/original/${
        trend.poster_path
      }" alt="poster" />
      <h3 class="card__title">${original_title}</h3>
      <p class="card__genre"><span>${genre_ids
        .map(genre_id => genres[genre_id])
        .slice(0, 1)}</span> | <span>${release_date.slice(0, 4)}</span></p>
    </div>
  </li>`;
    })
    .join('');

  return (trendingList.innerHTML = markup);
}
