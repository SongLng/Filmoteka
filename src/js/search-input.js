const input = document.querySelector('.input');
import { fetchTrending } from './fetch-api';
import { fetchByName } from './fetch-api';

let searchName;

function onSubmit(event) {
  event.preventDefault();

  const searchName = Object.fromEntries(new FormData(event.target));

  fetchByName(searchName.name);
  input.reset();
}

input.addEventListener('submit', onSubmit);
fetchTrending();
