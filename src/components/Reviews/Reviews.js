import { useEffect } from 'react';
import { useState } from 'react';
import getMovieReviews from 'service/getMovieReviews';
import { useOutletContext } from 'react-router-dom';

export default function Reviews() {
  const filmId = useOutletContext();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!filmId) return;

    getMovieReviews(filmId).then(reviews => setReviews(reviews));
  }, [filmId]);

  if (reviews.length === 0)
    return (
      <>
        <p>No reviews</p>
      </>
    );

  const filmReviews = reviews.map(review => {
    return (
      <li key={review.id}>
        <p>{review.author}</p>
        <p>{review.content}</p>
      </li>
    );
  });

  return (
    <div>
      <ul>{filmReviews}</ul>
    </div>
  );
}
