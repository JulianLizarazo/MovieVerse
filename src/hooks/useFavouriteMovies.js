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

    const addToFavouriteMoviesList = (idMovie, posterMovie, posterAltMovie, titleMovie ) => {
        const movieInList = findMovie(idMovie);

        if(movieInList === -1){
            setMovieList({
                ...movieList,
                favouriteMoviesList: [...movieList.favouriteMoviesList, { id: idMovie, title: titleMovie, poster: posterMovie, alt: posterAltMovie }]
            });
        } else {
            alert("la pelicula ya está agregada xd");
        }  
    }

    const findMovie = (movie) => {
        const isInList = movieList.favouriteMoviesList.findIndex((movieId) => movieId === movie);
        console.log(isInList)
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