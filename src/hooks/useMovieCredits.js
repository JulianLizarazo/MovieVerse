import { useEffect, useState } from "react";
import { getMovieCredits } from "../services/getMovieCredits";

export const useMovieCredits = (movieId) => {
  const [cast, setCast] = useState([]);

  const getOnlyActors = async () => {
    try {
      const fetch = await getMovieCredits(movieId);
      const castArray = fetch.data.cast;
      setCast(castArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOnlyActors();
  });

  return { cast };
};
