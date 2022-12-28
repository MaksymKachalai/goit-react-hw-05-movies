import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Movies from 'pages/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import Home from 'pages/Home';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}>
            <Route path=":trandingId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
