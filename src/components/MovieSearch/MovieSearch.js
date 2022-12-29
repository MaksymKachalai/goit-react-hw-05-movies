import { useEffect, useState } from 'react';
import getMovieByQuery from 'service/getMovieByQuery';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = styled(NavLink)`
  font-size: 20px;
`;

const SearchInput = styled('input')`
  width: 300px;
`;

const Form = styled('form')`
  display: flex;
  justify-content: center;
`;

export default function MovieSearch() {
  const [inputValue, setInputValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams('');
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    getMovieByQuery(query).then(response => setMovies(response));
  }, [query, searchParams]);

  const handleInputChange = event => {
    setInputValue(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams(inputValue ? { query: inputValue } : {});
  };

  const moviesList = movies.map(({ id, original_title }) => {
    return (
      <li key={id}>
        <NavItem to={`${id}`} state={{ from: location }}>
          {original_title}
        </NavItem>
      </li>
    );
  });

  return (
    <div>
      <Form action="sumbit" onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          onChange={handleInputChange}
          value={inputValue}
        />
        <button type="sumbit">Search</button>
      </Form>
      <div>
        <ul>{moviesList}</ul>
      </div>
    </div>
  );
}
