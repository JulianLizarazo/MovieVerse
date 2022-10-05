import { useEffect, useState } from "react";
import { getMovie } from "../services/getMovie";

export const useMovies = (idMovie) => {
  const [movie, setMovie] = useState({});

  const saveMovie = async () => {
    const fetchMovie = await getMovie(idMovie);
    setMovie(fetchMovie.data);
  };

  useEffect(() => {
    saveMovie();
  }, []);

  return { movie };
};
