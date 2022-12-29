import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { getTrandingMovies } from 'service/getTrandingMovies';
import styled from 'styled-components';

const FilmItem = styled(NavLink)`
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 10px;
`;

const FilmList = styled('ul')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default function TrandingMovies() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    try {
      getTrandingMovies().then(movies => setMovies(movies));
    } catch (e) {
      console.log(e);
    }
  }, []);

  if (movies.length === 0) {
    return (
      <>
        <p>Sorry, something went wrong. Try again</p>
      </>
    );
  }

  return (
    <>
      <FilmList>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <FilmItem to={`movies/${movie.id}`} state={{ from: location }}>
                {movie.title || movie.name}
              </FilmItem>
            </li>
          );
        })}
      </FilmList>
    </>
  );
}
