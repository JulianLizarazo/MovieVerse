import { AnimatePresence, motion } from "framer-motion";
import { TbLetterX } from "react-icons/tb";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./FavouriteMovie.scss";
import { ConfirmationToRemoveModal } from "../../components/ConfirmationToRemoveModal/ConfirmationToRemoveModal";
import { useState } from "react";
import { useContext } from "react";
import { FavouriteMovieListContext } from "../../context/FavouriteMovieListContext";
import { RemoveConfirmedModal } from "../../components/RemoveConfirmedModal/RemoveConfirmedModal";

const FavouriteMovie = ({
  movieId,
  movieTitle,
  moviePoster,
  moviePosterAlt,
}) => {
  const [confirmationToRemove, setConfirmationToRemove] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const { removeMovieFromFavourites } = useContext(FavouriteMovieListContext);
  const handleRemoveMovieFromFavourites =
    (confirmation = true, idMovie = null) =>
    () => {
      if (confirmation) {
        setTimeout(() => {
          removeMovieFromFavourites(idMovie);
        }, 2000);

        setConfirmationToRemove(true);
      }
      setShowConfirmationModal(false);
      setTimeout(() => {
        setConfirmationToRemove(false);
      }, 3000);
    };

  return (
    <>
      <article className="favourite-movies__list-movie">
        <img
          src={`https://image.tmdb.org/t/p/original${moviePoster}`}
          alt={moviePosterAlt}
          loading="lazy"
          width="200px"
          height="300px"
        />

        <h4>{movieTitle}</h4>
        <div className="favourite-movies__list-movie--options">
          <Link to={`/movies/${movieId}`}>
            <motion.div className="go-to-movie-option">
              <AiOutlineEye />
            </motion.div>
          </Link>
          <motion.div
            className="delete-movie-option"
            onClick={() => setShowConfirmationModal(true)}
          >
            <TbLetterX />
          </motion.div>
        </div>

        {showConfirmationModal && (
          <ConfirmationToRemoveModal
            handleRemoveMovieFromFavourites={handleRemoveMovieFromFavourites}
            movieId={movieId}
          />
        )}
      </article>
      <AnimatePresence>
        {confirmationToRemove && <RemoveConfirmedModal />}
      </AnimatePresence>
    </>
  );
};

export { FavouriteMovie };