import { AnimatePresence, motion } from "framer-motion";
import { TbLetterX } from "react-icons/tb";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./FavouriteMovie.scss";
import { ConfirmationToRemoveModal } from "../../components/ConfirmationToRemoveModal/ConfirmationToRemoveModal";
import { useState } from "react";
import { useContext } from "react";
import { FavouriteMovieListContext } from "../../context/FavouriteMovieListContext";
import { NoticeSlideModal } from "../../components/NoticeSlideModal/NoticeSlideModal";
import { ColorModeContext } from "../../context/ColorModeContext";
import { IMAGES_URL } from "../../api/images";

const removeAnimation = {
  eliminate: {
    opacity: 0,
  },
};

const FavouriteMovie = ({
  movieId,
  movieTitle,
  moviePoster,
  moviePosterAlt,
}) => {
  const { theme } = useContext(ColorModeContext);
  const [animationToRemove, setAnimationToRemove] = useState(false);
  const [confirmationToRemove, setConfirmationToRemove] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const { removeMovieFromFavourites } = useContext(FavouriteMovieListContext);
  const handleRemoveMovieFromFavourites =
    (confirmation = true, idMovie = null) =>
    () => {
      if (confirmation) {
        setTimeout(() => {
          removeMovieFromFavourites(idMovie);
        }, 1000);

        setAnimationToRemove(true);
        setConfirmationToRemove(true);
      }
      setShowConfirmationModal(false);
      setTimeout(() => {
        setAnimationToRemove(false);
        setConfirmationToRemove(false);
      }, 2500);
    };

  return (
    <>
      <motion.article
        className="favourite-movies__list-movie"
        animate={animationToRemove && "eliminate"}
        variants={removeAnimation}
        transition={{ duration: 1 }}
      >
        <img
          src={`${IMAGES_URL}original${moviePoster}`}
          alt={moviePosterAlt}
          loading="lazy"
          width="200px"
          height="300px"
        />

        <h4>{movieTitle}</h4>
        <div className="favourite-movies__list-movie--options">
          <Link to={`/movies/${movieId}`}>
            <motion.div className={`go-to-movie-option go-to-movie-option-${theme}`}>
              <AiOutlineEye  />
            </motion.div>
          </Link>
          <motion.div
            className={`delete-movie-option delete-movie-option-${theme}`}
            onClick={() => setShowConfirmationModal(true)}
          >
            <TbLetterX/>
          </motion.div>
        </div>

        {showConfirmationModal && (
          <ConfirmationToRemoveModal
            handleRemoveMovieFromFavourites={handleRemoveMovieFromFavourites}
            movieId={movieId}
          />
        )}
      </motion.article>
      <AnimatePresence>
        {confirmationToRemove && (
          <NoticeSlideModal text={"Eliminado exitosamente"} top={"desktop"} />
        )}
      </AnimatePresence>
    </>
  );
};

export { FavouriteMovie };
