import "./FavMovieQuickList.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BiTrashAlt } from "react-icons/bi";
import { useContext, useState } from "react";
import { FavouriteMovieListContext } from "../../context/FavouriteMovieListContext";
import { ColorModeContext } from "../../context/ColorModeContext";
import { IMAGES_URL } from "../../api/images";

const hover = {
  backgroundColor: "#400808",
}



const animationToRemove = {
  animate: {
    x: "100%",
  },
};

const FavMovieQuickList = ({
  idMovie,
  titleMovie,
  posterMovie,
  posterAltMovie,
}) => {
  const [animation, setAnimation] = useState(false);
  const { removeMovieFromFavourites } = useContext(FavouriteMovieListContext);
  const { theme } = useContext(ColorModeContext);

  const handleRemoveMovieFromList = (idMovie) => () => {
    setTimeout(() => {
      removeMovieFromFavourites(idMovie);
    }, 250);

    setAnimation(true);
  };

  return (
    <motion.article
      className="animation-div"
      animate={animation && "animate"}
      variants={animationToRemove}
    >
      <Link
        to={`/movies/${idMovie}`}
        className={`favourite-movies-section__movie text favourite-movies-section__movie-${theme}`}
      >
        <img
          src={`${IMAGES_URL}w154${posterMovie}`}
          alt={posterAltMovie}
          loading="lazy"
          width="80px"
          height="110px"
        />
        <h4>{titleMovie}</h4>
      </Link>
      <motion.div
        className="favourite-movies-section__movie-remove"
        whileHover={hover}
        onClick={handleRemoveMovieFromList(idMovie)}
      >
        <BiTrashAlt className={`trash-icon-${theme}`} />
      </motion.div>
    </motion.article>
  );
};

export { FavMovieQuickList };
