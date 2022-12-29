import { API_KEY } from 'variables/constants';

export default function getCast(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      Promise.reject('Something went wrong in getCastPromise');
    })
    .then(response => response.cast)
    .catch(err => console.log);
}
