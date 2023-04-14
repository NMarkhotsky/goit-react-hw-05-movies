import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'components/services/api';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const results = await getTrendingMovies();

        setMovies([...results]);
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
  }, []);

  return (
    <main>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
