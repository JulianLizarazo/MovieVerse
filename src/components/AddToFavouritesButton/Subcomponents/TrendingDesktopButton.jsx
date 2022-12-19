import { AnimatePresence } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { FavouriteMovieListContext } from "../../../context/FavouriteMovieListContext";
import { useAddedAnimationConfirmation } from "../../../hooks/useAddedAnimationConfirmation";
import { NoticeSlideModal } from "../../NoticeSlideModal/NoticeSlideModal";
import { motion } from "framer-motion";
import { ColorModeContext } from "../../../context/ColorModeContext";

const hover = {
  scale: 1.2,
};

const TrendingDesktopButton = ({
  handleAddToFavouriteList,
  movieId,
  moviePoster,
  moviePosterAlt,
  movieTitle,
}) => {
  const [isAddedNow, setIsAddedNow] = useState(false);
  const { theme } = useContext(ColorModeContext);
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
    <>
      <motion.div onClick={() => setIsAddedNow(!isAddedNow)} whileHover={hover}>
        {!isAddedNow ? (
          <span
            className={`trending-desktop trending-button-add-${theme}`}
            onClick={handleAddToFavouriteList(
              movieId,
              moviePoster,
              moviePosterAlt,
              movieTitle
            )}
          >
            Agregar a favoritos
          </span>
        ) : (
          <span
            className={`trending-desktop trending-button-remove-${theme}`}
            onClick={handleRemoveMovieFromFavourites(movieId)}
          >
            Eliminar de favoritos
          </span>
        )}
      </motion.div>
      <AnimatePresence>
        {confirmationToAdded && (
          <NoticeSlideModal text="Eliminado exitosamente" top="desktop" />
        )}
      </AnimatePresence>
    </>
  );
};

export { TrendingDesktopButton };
