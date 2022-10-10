import { API } from "../api/axios";

const getMovieImages = async (movieId) => {
  try {
    const response = await API(`movie/${movieId}/images`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { getMovieImages };