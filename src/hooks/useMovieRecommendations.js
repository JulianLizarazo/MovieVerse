import { useEffect, useState } from "react"
import { getMovieRecommendations } from "../services/getMovieRecommendations";


export const useMovieRecommendations = (movieId) => {
    const [movieRecommendations, setMovieRecommendations] = useState([]);

    const saveMovierecommendations = async () => {
        try{
            const fetch = await getMovieRecommendations(movieId);
            setMovieRecommendations(fetch?.data?.results);
        } catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        saveMovierecommendations();
    }, [movieId]);

    return { movieRecommendations };
}

