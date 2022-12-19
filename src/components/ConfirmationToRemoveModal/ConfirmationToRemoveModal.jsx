import { useContext } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";
import "./ConfirmationToRemoveModal.scss";

const ConfirmationToRemoveModal = ({
  handleRemoveMovieFromFavourites,
  movieId,
}) => {
  const { theme } = useContext(ColorModeContext);
  return (
    <div className="confirmation-to-remove-modal">
      <p>Seguro que quieres borrar esta pelicula de tus favoritos?</p>
      <div className={`modal-button yes-button-${theme}`} onClick={handleRemoveMovieFromFavourites(true, movieId)} >Si</div>
      <div className={`modal-button no-button-${theme}`}  onClick={handleRemoveMovieFromFavourites(false)}>No</div>
    </div>
  );
};

export { ConfirmationToRemoveModal };
