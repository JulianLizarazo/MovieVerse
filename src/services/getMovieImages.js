import { APIIMAGES } from "../api/axios";

const getMovieImages = async (movieId) => {
  try {
    const response = await APIIMAGES(`movie/${movieId}/images`,);
    return response;
  } catch (error) {
    
  }
};

export { getMovieImages };