import "./SearchMovieDesktop.scss";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";
import { RiSendPlane2Fill } from "react-icons/ri";
const variantsSearchInput = {
  open: {
    width: "400px",
    opacity: 1,
  },

  closed: {
    width: "0px",
    opacity: 0,
  },
};

const SearchMovieDesktop = ({
  moviesSearched,
  handleSubmit,
  handleChange,
  showMenu,
  clickSearchButton,
  transition,
  keyword,
  menuRef,
  hiddenMenu,
}) => {
  const { theme } = useContext(ColorModeContext);

  return (
    <motion.section
      className="search-desktop__input"
      animate={clickSearchButton ? "open" : "closed"}
      variants={variantsSearchInput}
      transition={transition}
    >
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Pelicula o show de TV"
          className={`search-desktop__input-input input-${theme}`}
          onChange={handleChange}
          onClick={showMenu}
        />
        { keyword !== "" &&  <RiSendPlane2Fill  onClick={handleSubmit} className="search-movies-icon" /> }
      </form>
      {keyword !== "" && (
        <section
          className={`movies-searched search-${theme}`}
          id="search-menu"
          ref={menuRef}
        >
          {moviesSearched.map((movie) => (
            <Link to={`/movies/${movie.id}`} className="search-link text">
              <article
                className={`movies-searched__movie movie-searched-${theme}`}
                onClick={hiddenMenu}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                  loading="lazy"
                  width="70px"
                  height="90px"
                />
                <div className="movies-searched__movie--content">
                  <span className="movies-searched__movie--content-title">
                    {movie.title}
                  </span>
                  <div className="movies-searched__movie--content-votes">
                    <AiFillStar />
                    <span>{movie.vote_average}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
          <p onClick={handleSubmit} className={`movies-searched__show-results show-results-${theme}`}>
            Ver más resultados
          </p>
        </section>
      )}
    </motion.section>
  );
};

export { SearchMovieDesktop };
