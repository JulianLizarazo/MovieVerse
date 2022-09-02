
import { useEffect, useState } from "react";
import "./TrendingMovie.scss";

const TrendingMovie = ({id,title,alt,poster}) => {

    
    const styles = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w200${poster})`
    }

    
    return(
        <article className="trending-movie" style={styles} aria-label={alt}>

        </article>
    );
}

export { TrendingMovie };