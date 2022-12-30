import { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import getMovieById from 'service/getMovieById';

const NavList = styled('nav')`
  display: flex;
  justify-content: space-evenly;
`;

const Title = styled('h3')`
  text-align: center;
`;

const NavItem = styled(NavLink)`
  font-size: 20px;
`;

const ButtonBox = styled('div')`
  margin-bottom: 20px;
`;

const ButtonBack = styled(NavLink)`
  padding: 5px;
  background-color: white;
  border: 2px solid red;
  font-size: 20px;
  color: black;
  margin-bottom: 20px;
`;

const MovieDetailsBox = styled('div')`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;

const MovieDescriptionsBox = styled('div')`
  width: 50%;
`;

export default function MovieDetails() {
  const { trandingId } = useParams(null);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    try {
      getMovieById(trandingId).then(movie => setMovie(movie));
    } catch (error) {}
  }, [trandingId]);

  const location = useLocation();

  if (!movie) {
    return <>No movie</>;
  }

  const {
    original_title,
    production_countries,
    popularity,
    overview,
    release_date,
  } = movie;

  const movieYear = new Date(release_date).getFullYear();

  const movieCountry = production_countries
    ? production_countries[0].name
    : 'USA';

  return (
    <>
      <ButtonBox>
        <ButtonBack to={location.state?.from ?? '/movies'}>Go back</ButtonBack>
      </ButtonBox>
      <MovieDetailsBox>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
        />
        <MovieDescriptionsBox>
          <h2>
            {original_title}({movieYear})
          </h2>
          <p>Country: {movieCountry}</p>
          <p>Popularity: {popularity}</p>
          <p>{overview}</p>
        </MovieDescriptionsBox>
      </MovieDetailsBox>
      <Title>Additional information</Title>
      <NavList>
        <NavItem to="cast">Cast</NavItem>
        <NavItem to="reviews">Reviews</NavItem>
      </NavList>
      <Outlet context={movie.id} />
    </>
  );
}
