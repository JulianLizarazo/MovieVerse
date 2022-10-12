import { API } from "../api/axios";

const getMovieRecommendations = async (movieId) => {
  try {
    const response = await API(`movie/${movieId}/recommendations`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { getMovieRecommendations };