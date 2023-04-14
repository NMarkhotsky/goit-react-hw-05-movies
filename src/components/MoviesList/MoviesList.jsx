import { Link, useLocation } from 'react-router-dom';

function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <div>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <p>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesList;
