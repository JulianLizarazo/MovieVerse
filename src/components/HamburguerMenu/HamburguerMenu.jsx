import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";
import { FavouriteMovieListContext } from "../../context/FavouriteMovieListContext";
import { Link } from "react-router-dom";
import { BiTrashAlt } from "react-icons/bi";
import "./HamburguerMenu.scss";
import { MenuToggle } from "./MenuToggle";

const variants = {
  open: {
    transform: "translateX(0%)",
  },
  closed: {
    transform: "translateX(101%)",
  },
};

const transtition = { type: "spring", duration: 1, stiffness: 33, delay: 0.1 };

const HamburguerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const { theme } = useContext(ColorModeContext);

  const { movieList, removeMovieFromFavourites } = useContext(
    FavouriteMovieListContext
  );
  
  const handleRemoveMovieFromList = (idMovie) => () => {
    removeMovieFromFavourites(idMovie);
  };

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <nav className="container">
      <div className="icon">
        <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      </div>
      <motion.aside
        className={`menu-container ${theme}`}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={transtition}
      >
        <h3>My Favourite Movies</h3>

        <section className={`favourite-movies-section ${theme}`}>
          {movieList.favouriteMoviesList.map((favouriteMovie) => (
            <>
              <Link
                to={`/movies/${favouriteMovie.id}`}
                className="favourite-movies-section__movie text"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w154${favouriteMovie.poster}`}
                  alt={favouriteMovie.alt}
                  loading="lazy"
                  width="80px"
                  height="110px"
                />
                <h4>{favouriteMovie.title}</h4>
              </Link>
              <motion.div
                className="favourite-movies-section__movie-remove"
                whileHover={{ backgroundColor: "rgba(0,0,0,1)" }}
                onClick={handleRemoveMovieFromList(favouriteMovie.id)}
              >
                <BiTrashAlt />
              </motion.div>
            </>
          ))}
        </section>
        {movieList.favouriteMoviesList.length > 20 && (
          <section>
            <span>ver todas las peliculas</span>
          </section>
        )}
      </motion.aside>
    </nav>
  );
};

export { HamburguerMenu };
