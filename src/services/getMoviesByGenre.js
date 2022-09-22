import { API } from "../api/axios"

const getMoviesByGenre = async (genre, page = 1) => {
    
    try{
        const response = await API('discover/movie', {
            params: {
                with_genres: genre,
                page: page,
            }
        });

        return response;
    } catch (error){
        console.log(error);
    }
}

export { getMoviesByGenre }