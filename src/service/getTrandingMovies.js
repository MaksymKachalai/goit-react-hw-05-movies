import { API_KEY } from 'variables/constants';

export const getTrandingMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      Promise.reject('Something went wrong in getCastPromise');
    })
    .then(response => response.results)
    .catch(err => console.log);
};
