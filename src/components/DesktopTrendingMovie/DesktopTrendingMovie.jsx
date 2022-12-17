import "./DesktopTrendingMovie.scss";
import { AiFillStar } from "react-icons/ai";
import { AddToFavouritesButton } from "../AddToFavouritesButton/AddToFavouritesButton";
import { useState } from "react";
import { NoticeSlideModal } from "../NoticeSlideModal/NoticeSlideModal";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const DesktopTrendingMovie = ({
  id,
  title,
  overview,
  voteAverage,
  poster,
  alt,
}) => {
  const [confirmationToAdded, setConfirmationToAdded] = useState(false);

  useEffect(() => {
    if (confirmationToAdded) {
      setTimeout(() => {
        setConfirmationToAdded(false);
      }, 2000);
    }
  }, [confirmationToAdded]);

  return (
    <article className="desktop-trending-movie">
      <aside className="desktop-trending-movie__info">
        <h3>{title}</h3>
        <p>{overview}</p>
      </aside>
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${poster})`,
        }}
        className="desktop-trending-movie__principal"
        aria-label={alt}
      ></div>
      <aside className="desktop-trending-movie__popularity">
        <div>
          <AiFillStar />
          <span>{voteAverage} / 10</span>
        </div>

        <AddToFavouritesButton
          whereIsTheButton={"trending-desktop"}
          movieId={id}
          movieTitle={title}
          moviePoster={poster}
          moviePosterAlt={alt}
          confirmationState={setConfirmationToAdded}
        />
        <button className="desktop-trending-movie__popularity-details">
          Details
        </button>
      </aside>
      <AnimatePresence>
        {confirmationToAdded && (
          <NoticeSlideModal
            text={"Pelicula agregada exitosamente"}
            top={"desktop"}
          />
        )}
      </AnimatePresence>
    </article>
  );
};

export { DesktopTrendingMovie };
