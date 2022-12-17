import { AnimatePresence } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FavouriteMovieListContext } from "../../../context/FavouriteMovieListContext";
import { useAddedAnimationConfirmation } from "../../../hooks/useAddedAnimationConfirmation";
import { NoticeSlideModal } from "../../NoticeSlideModal/NoticeSlideModal";

const TrendingMobileButton = ({
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
          className="favourite"
          onClick={handleAddToFavouriteList(
            movieId,
            moviePoster,
            moviePosterAlt,
            movieTitle,
            isAddRepeated
          )}
        />
      ) : (
        <AiFillHeart className="favourite" />
      )}
      <AnimatePresence>
        {confirmationToAdded && (
          <NoticeSlideModal text="Eliminado exitosamente" top="mobile" />
        )}
      </AnimatePresence>
    </div>
  );
};

export { TrendingMobileButton };
