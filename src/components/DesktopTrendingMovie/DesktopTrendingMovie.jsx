import "./DesktopTrendingMovie.scss";
import { AiFillStar } from "react-icons/ai";
import { AddToFavouritesButton } from "../AddToFavouritesButton/AddToFavouritesButton";
import { useState } from "react";
import { NoticeSlideModal } from "../NoticeSlideModal/NoticeSlideModal";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";

const hover = {
  scale: 1.2,
};

const DesktopTrendingMovie = ({
  id,
  title,
  overview,
  voteAverage,
  poster,
  alt,
}) => {
  const [confirmationToAdded, setConfirmationToAdded] = useState(false);
  const { theme } = useContext(ColorModeContext);

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
        <div className="div">
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
        <motion.div whileHover={hover}>
          <Link
            to={`movies/${id}`}
            className={`desktop-trending-movie__popularity-details button-details-${theme}`}
          >
            Details
          </Link>
        </motion.div>
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
