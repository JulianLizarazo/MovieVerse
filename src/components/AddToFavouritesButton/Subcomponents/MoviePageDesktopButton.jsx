import { AnimatePresence } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FavouriteMovieListContext } from "../../../context/FavouriteMovieListContext";
import { useAddedAnimationConfirmation } from "../../../hooks/useAddedAnimationConfirmation";
import { NoticeSlideModal } from "../../NoticeSlideModal/NoticeSlideModal";

const MoviePageDesktopButton = ({
  handleAddToFavouriteList,
  movieId,
  moviePoster,
  moviePosterAlt,
  movieTitle,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isAddedNow, setIsAddedNow] = useState(false);
  const [isAddRepeated, setIsAddRepeated] = useState(false); // this state is for verificate if the movie was added previously (for evade the animation)
  const { movieAddedVerificate, removeMovieFromFavourites } = useContext(
    FavouriteMovieListContext
  );
  const { confirmationToAdded, setConfirmationToAdded } =
    useAddedAnimationConfirmation();

  useEffect(() => {
    if (movieAddedVerificate(movieId)) {
      setIsAddedNow(true);
    }
  }, []);

  const verificateToEliminateMovie = () => {
    if (isAddedNow) {
      setIsAddRepeated(false);
      removeMovieFromFavourites(movieId);
      setConfirmationToAdded(true);
    } else {
      setIsAddRepeated(true);
    }

    setIsAddedNow(!isAddedNow);
  };

  return (
    <div
      onMouseOverCapture={() => setIsHovering(true)}
      onMouseOutCapture={() => setIsHovering(false)}
      onClick={() => verificateToEliminateMovie()}
    >
      {!isHovering && !isAddedNow ? (
        <AiOutlineHeart className="movie-page-desktop-button" />
      ) : (
        <AiFillHeart
          className="movie-page-desktop-button"
          onClick={handleAddToFavouriteList(
            movieId,
            moviePoster,
            moviePosterAlt,
            movieTitle,
            isAddRepeated
          )}
        />
      )}
      <AnimatePresence>
        {confirmationToAdded && (
          <NoticeSlideModal text="Eliminado exitosamente" top="desktop" />
        )}
      </AnimatePresence>
    </div>
  );
};

export { MoviePageDesktopButton };
