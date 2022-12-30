import { API_KEY } from 'variables/constants';

export default function getMovieById(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    Promise.reject('Something went wrong in getMovieId');
  });
}
