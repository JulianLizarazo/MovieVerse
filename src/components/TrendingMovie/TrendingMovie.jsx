import { AiFillStar } from "react-icons/ai";
import { AddToFavouritesButton } from "../AddToFavouritesButton/AddToFavouritesButton";
import "./TrendingMovie.scss";

const TrendingMovie = ({ id, alt, poster, voteAverage }) => {
  const styles = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w200${poster})`,
  };

  

  return (
    <article className="trending-movie" style={styles} aria-label={alt}>
      
      <AddToFavouritesButton whereIsTheButton={"trending-mobile"} movie={id}/>

      <div className="trending-movie__vote-average">
        <AiFillStar className="star-icon"/>
        <span>{voteAverage} / 10</span>
      </div>
    </article>
  );
};

export { TrendingMovie };
