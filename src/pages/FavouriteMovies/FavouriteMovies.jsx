import { useContext } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";
import { FavouriteMovieListContext } from "../../context/FavouriteMovieListContext";
import { motion } from "framer-motion";
import { TbLetterX } from "react-icons/tb";
import { AiOutlineEye } from "react-icons/ai";
import "./FavouriteMovies.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ConfirmationToRemoveModal } from "../../components/ConfirmationToRemoveModal/ConfirmationToRemoveModal";

const FavouriteMovies = () => {
  const [confirmationToRemove, setConfirmationToRemove] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const { theme } = useContext(ColorModeContext);
  const { movieList, removeMovieFromFavourites } = useContext(
    FavouriteMovieListContext
  );

  const handleRemoveMovieFromFavourites = (idMovie) => {

    removeMovieFromFavourites(idMovie);
  };

  return (
    <>
      {confirmationToRemove && <ConfirmationToRemoveModal />}
      <main className={` favourite-movies  ${theme}`}>
        <h2 className="text">Mis peliculas favoritas</h2>
        <section className="favourite-movies__list text">
          {movieList.favouriteMoviesList.map((favouriteMovie) => (
            <article className="favourite-movies__list-movie">
              <img
                src={`https://image.tmdb.org/t/p/original${favouriteMovie.poster}`}
                alt={favouriteMovie.alt}
                loading="lazy"
                width="200px"
                height="300px"
              />

              <h4>{favouriteMovie.title}</h4>
              <div className="favourite-movies__list-movie--options">
                <Link to={`/movies/${favouriteMovie.id}`}>
                  <motion.div className="go-to-movie-option">
                    <AiOutlineEye />
                  </motion.div>
                </Link>
                <motion.div className="delete-movie-option">
                  <TbLetterX />
                </motion.div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
};

export { FavouriteMovies };
