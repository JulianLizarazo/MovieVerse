import { useEffect, useState } from "react"
import { getTrendingMovies } from "../services/getTrendingMovies";



export const useTrendingMovies = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    const saveTrendingMovies = async () => {
        try{
            const dataMovies = [];
            const trendingMovies = await getTrendingMovies();
            const dataTrendingMovies = trendingMovies.data;
            
            dataTrendingMovies.results.forEach(trendingMovie => dataMovies.push({
                id: trendingMovie.id,
                title: trendingMovie.title,
                alt: `Movie ${trendingMovie.title}`,
                poster: trendingMovie.poster_path,
                
            }))

            setTrendingMovies(dataMovies);
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        saveTrendingMovies();
    }, [])

    return { trendingMovies };

}