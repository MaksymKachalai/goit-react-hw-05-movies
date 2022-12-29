import { Outlet } from 'react-router-dom';
import MovieSearch from 'components/MovieSearch/MovieSearch';
export default function Movies() {
  return (
    <div>
      <MovieSearch />
      <Outlet />
    </div>
  );
}
