import { AnimatePresence } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { FavouriteMovieListContext } from "../../../context/FavouriteMovieListContext";
import { useAddedAnimationConfirmation } from "../../../hooks/useAddedAnimationConfirmation";
import { NoticeSlideModal } from "../../NoticeSlideModal/NoticeSlideModal";

const TrendingDesktopButton = ({
  handleAddToFavouriteList,
  movieId,
  moviePoster,
  moviePosterAlt,
  movieTitle,
}) => {
  const [isAddedNow, setIsAddedNow] = useState(false);
  const { movieAddedVerificate, removeMovieFromFavourites } = useContext(
    FavouriteMovieListContext
  );
  const { confirmationToAdded, setConfirmationToAdded } =
    useAddedAnimationConfirmation();

  const handleRemoveMovieFromFavourites = (idMovie) => () => {
    removeMovieFromFavourites(idMovie);
    setConfirmationToAdded(true);
  };

  useEffect(() => {
    if (movieAddedVerificate(movieId)) {
      setIsAddedNow(true);
    }
  }, []);

  return (
    <div onClick={() => setIsAddedNow(!isAddedNow)}>
      {!isAddedNow ? (
        <div
          className="trending-desktop"
          onClick={handleAddToFavouriteList(
            movieId,
            moviePoster,
            moviePosterAlt,
            movieTitle
          )}
        >
          Agregar a favoritos
        </div>
      ) : (
        <div
          className="trending-desktop"
          onClick={handleRemoveMovieFromFavourites(movieId)}
        >
          Eliminar de favoritos
        </div>
      )}
      <AnimatePresence>
        {confirmationToAdded && (
          <NoticeSlideModal text="Eliminado exitosamente" top="desktop" />
        )}
      </AnimatePresence>
    </div>
  );
};

export { TrendingDesktopButton };
