
import "./TrendingMovie.scss";

const TrendingMovie = ({id,title,alt,poster}) => {

    
    const styles = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w300${poster})`
    }

    
    return(
        <article className="trending-movie" style={styles}>

        </article>
    );
}

export {TrendingMovie};