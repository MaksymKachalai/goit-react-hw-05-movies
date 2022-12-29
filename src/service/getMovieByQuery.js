import { API_KEY } from 'variables/constants';

export default function getMovieByQuery(query) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      Promise.reject('Something went wrong in getCastPromise');
    })
    .then(response => response.results)
    .catch(err => console.log);
}
