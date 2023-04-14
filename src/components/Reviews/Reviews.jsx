import { getReviewsMovie } from 'components/services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovieCredits = async () => {
      const resp = await getReviewsMovie(movieId);
      console.log('resp: ', resp);
      setMovies([...resp]);
    };

    getMovieCredits();
  }, [movieId]);

  // author, content

  return (
    <ul>
      {movies.map(({ id, author, content }) => (
        <li key={id}>
          <b>{author}</b>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
