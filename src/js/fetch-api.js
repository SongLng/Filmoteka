import renderTrending from './card-render';

const API_KEY = '8a851f7b54845db9a7afea3bd46f2426';

// let pageNumber = 1;

export function fetchTrending(pageNumber = 1) {
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

export function fetchByName(name) {
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${name}`
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
