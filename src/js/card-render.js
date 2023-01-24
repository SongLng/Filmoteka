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

const trendingList = document.querySelector('.card__list');

function renderTrending(trends) {
  const markup = trends
    .map(trend => {
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

export default renderTrending;
