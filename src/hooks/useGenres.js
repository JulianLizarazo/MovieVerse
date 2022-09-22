import { useEffect, useState } from "react";
import { getGenres } from "../services/getGenres";


export const useGenres = () => {
  const [genres, setGenres] = useState([]);

  const saveGenres = async () => {
    try {
      const dataGenres = [];
      const fetchGenres = await getGenres();
      const genres = fetchGenres.data.genres;
      genres.forEach((genre) => {
        dataGenres.push(genre);
      });

      setGenres(dataGenres);
      
    } catch (error) {
      
    }
  };

  const getGenre = idGenre => {

    const genreToReturn =  genres.find( genre => genre.id === parseInt(idGenre));
    
    return genreToReturn?.name;
  }

 
  useEffect(() => {
    saveGenres();
  }, []);

  return {genres, getGenre};
};
