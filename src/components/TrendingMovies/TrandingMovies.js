import { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { getTrandingMovies } from 'service/getTrandingMovies';
import styled from 'styled-components';

const FilmItem = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
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

  useEffect(() => {
    getTrandingMovies().then(movies => setMovies(movies));
  }, []);

  return (
    <>
      <FilmList>
        {movies.map(movie => {
          return (
            <FilmItem key={movie.id} to={`movies/${movie.id}`}>
              {movie.title || movie.name}
            </FilmItem>
          );
        })}
      </FilmList>
      <Outlet />
    </>
  );
}
