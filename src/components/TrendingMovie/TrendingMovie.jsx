import { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IMAGES_URL } from "../../api/images";
import { ColorModeContext } from "../../context/ColorModeContext";
import "./TrendingMovie.scss";

const TrendingMovie = ({ id, alt, poster, voteAverage}) => {
  const styles = {
    backgroundImage: `url(${IMAGES_URL}w200${poster})`,
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
