import { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import getMovieById from 'service/getMovieById';

const MovieDetailsBox = styled('div')`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const MovieDescriptionsBox = styled('div')`
  width: 50%;
`;

export default function MovieDetails() {
  const { trandingId } = useParams(null);
  const [movie, setMovie] = useState({});

  const {
    poster_path,
    original_title,
    production_countries,
    popularity,
    overview,
    release_date,
  } = movie;

  useEffect(() => {
    getMovieById(trandingId).then(movie => setMovie(movie));
  }, [trandingId]);

  const movieYear = new Date(release_date).getFullYear();

  const movieCountry = production_countries
    ? production_countries[0].name
    : 'USA';

  return (
    <>
      <MovieDetailsBox>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
        <MovieDescriptionsBox>
          <h2>
            {original_title}({movieYear})
          </h2>
          <p>Country: {movieCountry}</p>
          <p>Popularity: {popularity}</p>
          <p>{overview}</p>
        </MovieDescriptionsBox>
      </MovieDetailsBox>
      <h3>Additional information</h3>
      <nav>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
      <Outlet context={movie.id} />
    </>
  );
}
