import { API_KEY } from 'variables/constants';

export default function getMovieReviews(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
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
