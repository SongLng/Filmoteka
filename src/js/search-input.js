const input = document.querySelector('.input');
const btnSearch = document.querySelector('.btn__search');
import renderTrending from './card-render';
const API_KEY = '8a851f7b54845db9a7afea3bd46f2426';

const searchFetch = event => {
  event.preventDefault;
  console.log(event.currentTarget.value);
  const name = event.target.value;
  console.log(name);
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${name}`
  )
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    // .then(data => renderTrending(data.results))
    .then(data => console.log(data))
    .catch(error => console.log(error));
};
btnSearch.addEventListener('click', searchFetch);
