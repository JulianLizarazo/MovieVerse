import { useEffect, useState } from "react"
import { getMovieRecommendations } from "../services/getMovieRecommendations";


export const useMovieRecommendations = (movieId) => {
    const [movieRecommendations, setMovieRecommendations] = useState([]);
    const [loading, setLoading] = useState(false);

    const saveMovierecommendations = async () => {
        try{
            setLoading(true);
            const fetch = await getMovieRecommendations(movieId);
            setMovieRecommendations(fetch?.data?.results);
        } catch(error){
            
        }
        setLoading(false);
    };

    useEffect(() => {
        saveMovierecommendations();
    }, [movieId]);

    return { movieRecommendations, loading };
}

