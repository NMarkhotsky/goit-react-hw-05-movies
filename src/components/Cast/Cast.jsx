import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCreditsMovie } from 'components/services/api';

const Cast = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovieCredits = async () => {
      const resp = await getCreditsMovie(movieId);
      setMovies([...resp]);
    };

    getMovieCredits();
  }, [movieId]);

  // name, character, profile_path
  // https://image.tmdb.org/t/p/w500

  return (
    <ul>
      {movies.map(({ id, name, character, profile_path }) => (
        <li key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w92${profile_path}`}
            alt={name}
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
