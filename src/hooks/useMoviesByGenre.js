import { useEffect, useState } from "react";
import { getMoviesByGenre } from "../services/getMoviesByGenre";

const INITIAL_PAGE = 1;

export const useMoviesByGenre = (genreId) => {
  const [moviesByGenre, setMoviesByGenre] = useState([]);
  const [page, setPage] = useState(INITIAL_PAGE);

  const getAllMoviesByGenre = async (genre, page) => {
    try {
      const moviesByGenreTemporal = [];
      const allMoviesByGenre = await getMoviesByGenre(genre, page);
      allMoviesByGenre.data.results.forEach((movieByGenre) => {
        moviesByGenreTemporal.push(movieByGenre);
      });

      if(moviesByGenre.length === 0){
        setMoviesByGenre(moviesByGenreTemporal);
      } else {
        setMoviesByGenre(prevMovie => prevMovie.concat(moviesByGenreTemporal));
      }

   
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllMoviesByGenre(genreId);
  }, [genreId]);

  useEffect(() => {
    if (page !== INITIAL_PAGE){
      getAllMoviesByGenre(genreId, page);

    }
  }, [page])

  return {moviesByGenre, setPage, page};
};
