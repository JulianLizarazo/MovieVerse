import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import "./MovieByGenre.scss";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useContext } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";
import { IMAGES_URL } from "../../api/images";


const animateProps = {
  scale: 1.15,
  textShadow: "0px 0px 8px rgb(255,255,255)",
  boxShadow: "inset 2px 2px 112px -15px rgba(0,0,0,0.8)",
};

const MovieByGenre = ({ id, title, poster, voteAverage,}) => {
  const styles = {
    backgroundImage: `url(${IMAGES_URL}w200${poster})`,
  };

  const { width } = useWindowSize();
  const { theme } = useContext(ColorModeContext);


  return (
    <Link to={`/movies/${id}`} className="link" relative="path">
      <motion.article
        className="movie-by-genre"
        style={styles}
        aria-label={`Movie ${title}`}
        whileHover={width > 768 && animateProps}
        
      >
        <div className="movie-by-genre__popularity">
          <AiFillStar className={`movie-by-genre-icon movie-by-genre-icon-${theme}`} />
          <span>{`${voteAverage} / 10`}</span>
        </div>
        <h3 className="movie-by-genre__title">{title}</h3>
      </motion.article>
    </Link>
  );
};

export { MovieByGenre };
