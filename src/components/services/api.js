import axios from 'axios';

// https://api.themoviedb.org/3/trending/all/day?api_key=da95833c0cadff5f8d11f7c5d3928061

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'da95833c0cadff5f8d11f7c5d3928061',
};

export const getTrendingMovies = async () => {
  try {
    const {
      data: { results },
    } = await axios.get(`/trending/movie/day`);

    return results;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchMovie = async query => {
  try {
    const {
      data: { results },
    } = await axios.get(`/search/movie`, {
      params: {
        query: query,
      },
    });

    return results;
  } catch (error) {
    console.log(error);
  }
};

export const getDetailsMovie = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCreditsMovie = async movieId => {
  try {
    const {
      data: { cast },
    } = await axios.get(`/movie/${movieId}/credits`);

    return cast;
  } catch (error) {
    console.log(error);
  }
};

export const getReviewsMovie = async movieId => {
  try {
    const {
      data: { results },
    } = await axios.get(`/movie/${movieId}/reviews`);

    return results;
  } catch (error) {
    console.log(error);
  }
};
