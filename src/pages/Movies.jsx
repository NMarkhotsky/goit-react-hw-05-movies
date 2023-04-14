import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { getSearchMovie } from 'components/services/api';
import React, { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movieName === '') return;

    const getSearch = async () => {
      const resp = await getSearchMovie(movieName);
      setMovies([...resp]);
    };

    getSearch();
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.search.value;
    if (value.trim() !== '') setSearchParams({ query: value });
    e.currentTarget.reset();
  };

  return (
    <main>
      <SearchForm onSubmit={handleSubmit} />
      <MoviesList movies={movies} />
      <Outlet />
    </main>
  );
};

export default Movies;
