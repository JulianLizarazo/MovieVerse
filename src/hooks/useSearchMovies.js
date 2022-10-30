import { useEffect, useState } from "react";
import { getMovieSearched } from "../services/getMovieSearched";

export const useSearchMovies = (keyword) => {
  const [moviesSearched, setMoviesSearched] = useState([]);

  const searchMovies = async () => {
    try {
      const fetchSearch = await getMovieSearched({ movieToSearch: keyword });
      setMoviesSearched(fetchSearch.data.results);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchMovies();
    
  }, [keyword]);

  return { moviesSearched };
};
