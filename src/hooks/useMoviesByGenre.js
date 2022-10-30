import { useEffect, useState } from "react";
import { getMoviesByGenre } from "../services/getMoviesByGenre";
import { getMovieSearched } from "../services/getMovieSearched";

const INITIAL_PAGE = 1;

export const useMoviesByGenre = (genreId, isSearch = false) => {
  const [movies, setMoviesByGenre] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);

  const getAllMoviesByGenre = async (genre, page) => {
    try {
      
      setLoading(true);
      const moviesByGenreTemporal = [];
      const allMoviesByGenre =  !isSearch ? await getMoviesByGenre(genre, page) : await getMovieSearched({page: page-1, movieToSearch: genre});
      console.log(allMoviesByGenre);
      allMoviesByGenre.data.results.forEach((movieByGenre) => {
        moviesByGenreTemporal.push(movieByGenre);
      });

      if (movies.length === 0) {
        setMoviesByGenre(moviesByGenreTemporal);
      } else {
        setMoviesByGenre((prevMovie) =>
          prevMovie.concat(moviesByGenreTemporal)
        );
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (page !== INITIAL_PAGE) {
      setTimeout(() => {
        getAllMoviesByGenre(genreId, page);
      }, 200);
    }
  }, [page]);

  return { movies, setPage,  loading };
};
