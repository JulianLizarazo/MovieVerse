import { useEffect, useState } from "react";
import { getMovieImages } from "../services/getMovieImages";


export const useMovieImages = (idMovie) => {
    const [movieImages, setMovieImages] = useState([]);
    const [loading, setLoading] = useState(false);

    const saveMovieImages = async () => {
        try{
            setLoading(true);
            const fetch = await getMovieImages(idMovie);
            setMovieImages(fetch?.data);

        } catch(error) {
            console.log(error);
        }
        setLoading(false);
    }

    useEffect(() => {
        saveMovieImages();
    }, [idMovie])

    return { movieImages, loading };
}