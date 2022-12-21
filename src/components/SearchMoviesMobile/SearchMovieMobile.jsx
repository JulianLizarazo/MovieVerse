import "./SearchMovieMobile.scss";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { IMAGES_URL } from "../../api/images";

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
          className={`search-section__input input-mobile-${theme}`}
          onChange={handleChange}
          id="input-mobile"
        />
        <button className={`search-section__button search-button-mobile-${theme} `} onClick={handleSubmit}>
          Buscar
        </button>
      </form>

      {keyword !== "" && (
        <section className="mobile-search-results" id="search-menu" ref={menuRef}>
          {moviesSearched.map((movie) => (
            <Link to={`/movies/${movie?.id}`} onClick={() => setTimeout(() => {window.location.reload()}, 1)} className="link">
              <article className={`movies-searched__movie movie-searched-${theme}`} onClick={hiddenMenu}>
              <img
                  src={`${IMAGES_URL}w92${movie.poster_path}`}
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
