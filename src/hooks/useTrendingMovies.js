import { useCallback, useEffect, useState } from "react";
import { getTrendingMovies } from "../services/getTrendingMovies";

export const useTrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const saveTrendingMovies = useCallback(async () => {
    try {
      const dataMovies = [];
      const trendingMovies = await getTrendingMovies();
      const dataTrendingMovies = trendingMovies.data;

      dataTrendingMovies.results.forEach((trendingMovie) =>
        dataMovies.push({
          id: trendingMovie.id,
          alt: `Movie ${trendingMovie.title}`,
          poster: trendingMovie.poster_path,
          voteAverage: trendingMovie.vote_average,
        })
      );

      setTrendingMovies(dataMovies);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    saveTrendingMovies();
  }, []);

  return { trendingMovies };
};
