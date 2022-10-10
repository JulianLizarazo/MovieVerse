import { useEffect, useState } from "react";
import { getMovieImages } from "../services/getMovieImages";


export const useMovieImages = (idMovie) => {
    const [movieImages, setMovieImages] = useState([]);

    const saveMovieImages = async () => {
        try{
            const fetch = await getMovieImages(idMovie);
            setMovieImages(fetch?.data);

        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        saveMovieImages();
    }, [idMovie])

    return { movieImages };
}