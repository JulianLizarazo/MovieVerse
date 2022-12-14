import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ColorModeContext } from "../../context/ColorModeContext";
import { useAddedAnimationConfirmation } from "../../hooks/useAddedAnimationConfirmation";
import { AddToFavouritesButton } from "../AddToFavouritesButton/AddToFavouritesButton";
import { NoticeSlideModal } from "../NoticeSlideModal/NoticeSlideModal";
import "./MoviePresentationMobile.scss";
import { IMAGES_URL } from "../../api/images";

export default function MoviePresentationMobile({
  poster_path,
  title,
  genres,
  backdrop_path,
  id,
}) {
  const styles = {
    backgroundImage: `url(${IMAGES_URL}w780${backdrop_path})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const { theme } = useContext(ColorModeContext);
  const { confirmationToAdded, setConfirmationToAdded } =
    useAddedAnimationConfirmation();

  return (
    <>
      <section className="movie-presentation-mobile" style={styles}>
        <img
          src={`${IMAGES_URL}w342${poster_path}`}
          loading="lazy"
        />
      </section>
      <section className={`movie-mobile-title-and-genres ${theme}`}>
        <div className="title-and-button-mobile-container">
          <h2 className="movie-mobile-title-and-genres__title text">{title}</h2>
          <AddToFavouritesButton
            movieId={id}
            moviePoster={poster_path}
            moviePosterAlt={`Pelicula ${title}`}
            movieTitle={title}
            whereIsTheButton={"movie-page-mobile"}
            confirmationState={setConfirmationToAdded}
          />
        </div>
        <div className="movie-mobile-title-and-genres__genres text">
          {genres.map((genre) => (
            <Link to={`/${genre.id}`} className="link" key={genre.id} > 
              <span className={`text genre-mobile-${theme}`}>{genre.name}</span>
            </Link>
          ))}
        </div>
      </section>
      <AnimatePresence>
        {confirmationToAdded && (
          <NoticeSlideModal text="Agregado exitosamente" top="mobile" />
        )}
      </AnimatePresence>
    </>
  );
}
