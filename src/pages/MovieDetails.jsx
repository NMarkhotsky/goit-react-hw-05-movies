import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getDetailsMovie } from 'components/services/api';

const MovieDetails = () => {
  const [detailsMovie, setDetailsMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const getMoviesDetails = async () => {
      const results = await getDetailsMovie(movieId);
      setDetailsMovie(results);
    };

    getMoviesDetails();
  }, [movieId]);

  const {
    original_title,
    release_date,
    vote_average,
    poster_path,
    overview,
    genres,
  } = detailsMovie;

  return (
    <main>
      <div>
        <img
          src={
            poster_path ? `https://image.tmdb.org/t/p/w300/${poster_path}` : ``
          }
          alt={original_title}
          width={320}
        />
        <div>
          <h2>
            {original_title} ({release_date})
          </h2>
          <b>User score: {vote_average}%</b>
          <b>Overview</b>
          <p>{overview} </p>
          <b>Genres</b>
          <ul>
            {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </ul>
        </div>
      </div>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
