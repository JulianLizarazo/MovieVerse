import "./MovePresentation.scss";
import { Link } from "react-router-dom";
import { AddToFavouritesButton } from "../AddToFavouritesButton/AddToFavouritesButton";
import { useAddedAnimationConfirmation } from "../../hooks/useAddedAnimationConfirmation";
import { NoticeSlideModal } from "../NoticeSlideModal/NoticeSlideModal";
import { AnimatePresence } from "framer-motion";
import { IMAGES_URL } from "../../api/images";

export default function MoviePresentation({
  poster_path,
  title,
  genres,
  backdrop_path,
  id,
}) {
  const styles = {
    backgroundImage: `url(${IMAGES_URL}original${backdrop_path})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const {
    confirmationToAdded,
    setConfirmationToAdded,
    confirmationToRemove,
    setConfirmationToRemove,
  } = useAddedAnimationConfirmation();

  return (
    <section className="movie-desktop__main-info" style={styles}>
      <section className="movie-desktop__main-info--title">
        <div className="img-and-button-container">
          <img
            src={`${IMAGES_URL}w500${poster_path}`}
            width="250px"
            height="350px"
            alt={`Pelicula ${title}`}
            loading="lazy"
          />
          <AddToFavouritesButton
            movieId={id}
            moviePoster={poster_path}
            moviePosterAlt={`Pelicula ${title}`}
            movieTitle={title}
            whereIsTheButton={"movie-page-desktop"}
            confirmationState={setConfirmationToAdded}
            confirmationToRemoveState={setConfirmationToRemove}
          />
        </div>
        <div className="movie-desktop__main-info--text">
          <h2>{title}</h2>
          <div>
            {genres?.map((genre) => (
              <Link to={`/${genre.id}`} className="link" key={genre.id} >
                <span>{genre.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <AnimatePresence>
        {confirmationToAdded && (
          <NoticeSlideModal text="Agregado exitosamente" top={"desktop"} />
        )}
        {confirmationToRemove && (
          <NoticeSlideModal text="Eliminado exitosamente" top={"mobile"} />
        )}
      </AnimatePresence>
    </section>
  );
}
