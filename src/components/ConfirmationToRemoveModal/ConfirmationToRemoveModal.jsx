import "./ConfirmationToRemoveModal.scss";

const ConfirmationToRemoveModal = ({
  handleRemoveMovieFromFavourites,
  movieId,
}) => {
  return (
    <div className="confirmation-to-remove-modal">
      <p>Seguro que quieres borrar esta pelicula de tus favoritos?</p>
      <div className="modal-button yes-button" onClick={handleRemoveMovieFromFavourites(true, movieId)} >Si</div>
      <div className="modal-button no-button"  onClick={handleRemoveMovieFromFavourites(false)}>No</div>
    </div>
  );
};

export { ConfirmationToRemoveModal };
