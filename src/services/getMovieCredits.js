import { API } from "../api/axios";

const getMovieCredits = async (movieId) => {
  try {
    const response = await API(`movie/${movieId}/credits`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { getMovieCredits };
