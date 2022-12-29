import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import getCast from 'service/getCast';

export default function Cast() {
  const [actors, setActors] = useState([]);
  const filmId = useOutletContext();

  useEffect(() => {
    if (!filmId) return;
    getCast(filmId).then(response => setActors(response));
  }, [filmId]);

  const actorsList = actors.map(
    ({ character, gender, original_name, profile_path, cast_id }) => {
      if (!profile_path) return;
      return (
        <li key={cast_id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            alt={character}
          />
          <p>Gender: {gender === 1 ? 'female' : 'male'}</p>
          <p>Name: {original_name}</p>
          <p>Character: {character}</p>
        </li>
      );
    }
  );

  return (
    <div>
      <ul>{actorsList}</ul>
    </div>
  );
}
