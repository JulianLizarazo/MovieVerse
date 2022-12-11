import { useEffect, useState } from "react"


const initialState = {
    favouriteMoviesList: [],
}

export const useFavouriteMovies = () => {
    const [movieList, setMovieList] = useState(() => {
        const localData = localStorage.getItem("favouriteMoviesList");
        return localData ? JSON.parse(localData) : initialState;
    })

    useEffect(() => {
        localStorage.setItem("favouriteMoviesList", JSON.stringify(movieList)) 
        
    }, [movieList]);

    const addToFavouriteMoviesList = (idMovie) => {
        const movieInList = findMovie(idMovie);

        if(movieInList === -1){
            setMovieList({
                ...movieList,
                favouriteMoviesList: [...movieList.favouriteMoviesList, { id: idMovie }]
            });
        }    
    }

    const findMovie = (movie) => {
        const isInList = movieList.favouriteMoviesList.findIndex((movieId) => movieId === movie);

        if(isInList > -1){
            return isInList;
        } else {
            return -1;
        }
    }

    return{
        movieList,
        addToFavouriteMoviesList,
    }
}