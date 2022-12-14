import { AnimatePresence } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ColorModeContext } from "../../../context/ColorModeContext";
import { FavouriteMovieListContext } from "../../../context/FavouriteMovieListContext";
import { useAddedAnimationConfirmation } from "../../../hooks/useAddedAnimationConfirmation";
import { NoticeSlideModal } from "../../NoticeSlideModal/NoticeSlideModal";

const MoviePageMobileButton = ({
  handleAddToFavouriteList,
  movieId,
  moviePoster,
  moviePosterAlt,
  movieTitle,
}) => {
  const [isAddedNow, setIsAddedNow] = useState(false);
  const [isAddRepeated, setIsAddRepeated] = useState(false); // this state is for verificate if the movie was added previously (for evade the animation)
  const { movieAddedVerificate, removeMovieFromFavourites } = useContext(
    FavouriteMovieListContext
  );

  const { confirmationToAdded, setConfirmationToAdded } =
    useAddedAnimationConfirmation();

  const { theme } = useContext(ColorModeContext);

  useEffect(() => {
    if (movieAddedVerificate(movieId)) {
      setIsAddedNow(true);
    }
  }, []);

  const verificateToEliminateMovie = () => {
    if (isAddedNow) {
      removeMovieFromFavourites(movieId);
      setIsAddRepeated(false);
      setConfirmationToAdded(true);
    } else {
      setIsAddRepeated(true);
    }
    setIsAddedNow(!isAddedNow);
  };
  return (
    <div onClick={() => verificateToEliminateMovie()}>
      {!isAddedNow ? (
        <AiOutlineHeart
          className={`movie-page-mobile-button movie-page-button-${theme}`}
          onClick={handleAddToFavouriteList(
            movieId,
            moviePoster,
            moviePosterAlt,
            movieTitle,
            isAddRepeated
          )}
        />
      ) : (
        <AiFillHeart
          className={`movie-page-mobile-button movie-page-button-${theme}`}
        />
      )}
      <AnimatePresence>
        {confirmationToAdded && (
          <NoticeSlideModal text="Eliminado exitosamente" top="mobile" />
        )}
      </AnimatePresence>
    </div>
  );
};

export { MoviePageMobileButton };
