import { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ColorModeContext } from "../../context/ColorModeContext";
import { useAddedAnimationConfirmation } from "../../hooks/useAddedAnimationConfirmation";
import { AddToFavouritesButton } from "../AddToFavouritesButton/AddToFavouritesButton";
import { NoticeSlideModal } from "../NoticeSlideModal/NoticeSlideModal";
import "./TrendingMovie.scss";

const TrendingMovie = ({ id, alt, poster, voteAverage, title }) => {
  const styles = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w200${poster})`,
  };

  const { theme } = useContext(ColorModeContext);

  return (
    <Link
      to={`movies/${id}`}
      className="trending-movie"
      style={styles}
      aria-label={alt}
    >
      <div className="trending-movie__vote-average">
        <AiFillStar className={`star-icon-${theme}`} />
        <span>{voteAverage} / 10</span>
      </div>
    </Link>
  );
};

export { TrendingMovie };
