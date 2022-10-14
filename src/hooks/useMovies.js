import { useCallback, useEffect, useState } from "react";
import { getMovie } from "../services/getMovie";

export const useMovies = (idMovie) => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  const saveMovie = useCallback(async () => {
    try {
      setLoading(true);
      const fetchMovie = await getMovie(idMovie);
      setMovie(fetchMovie.data);
    } catch (error) {
      
    }
    setLoading(false);
  }, [idMovie]);

  useEffect(() => {
    saveMovie();
  }, [idMovie]);

  return { movie, loading };
};
