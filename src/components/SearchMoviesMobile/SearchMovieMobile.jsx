import "./SearchMovieMobile.scss";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const SearchMovieMobile = ({
  variants,
  transition,
  clickSearchButton,
  moviesSearched,
  handleSubmit,
  handleChange,
  keyword,
  hiddenMenu,
  menuRef
  
}) => {
  const { theme } = useContext(ColorModeContext);
 
 
  return (
    <motion.section
      className={`search-section ${theme}`}
      initial={false}
      animate={clickSearchButton ? "open" : "closed"}
      variants={variants}
      transition={transition}
      id="search-menu-mobile"
      onClick={hiddenMenu}
      ref={menuRef}
    >
      <form onSubmit={handleSubmit} className="form-submit-mobile">
        <input
          placeholder="Pelicula o show de TV"
          className="search-section__input"
          onChange={handleChange}
          id="input-mobile"
        />
        <button className="search-section__button" onClick={handleSubmit}>
          Buscar
        </button>
      </form>

      {keyword !== "" && (
        <section className="mobile-search-results" id="search-menu" ref={menuRef}>
          {moviesSearched.map((movie) => (
            <Link to={`/movies/${movie?.id}`} onClick={() => setTimeout(() => {window.location.reload()}, 1)}>
              <article className={`movies-searched__movie movie-searched-${theme}`} onClick={hiddenMenu}>
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
        </section>
      )}
    </motion.section>
  );
};

export { SearchMovieMobile };
