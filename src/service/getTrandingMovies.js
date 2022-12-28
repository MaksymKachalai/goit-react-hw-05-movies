import { API_KEY } from 'variables/constants';

export const getTrandingMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  )
    .then(response => response.json())
    .then(response => response.results);
};
