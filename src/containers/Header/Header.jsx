import { ChangeColorModeButton } from "../../components/ChangeColorModeButton/ChangeColorModeButton";
import { HamburguerMenu } from "../../components/HamburguerMenu/HamburguerMenu";
import { motion } from "framer-motion";
import { Title } from "../../components/Title/Title";
import { BsSearch } from "react-icons/bs";
import "./Header.scss";
import { useContext, useEffect, useRef, useState } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useSearchMovies } from "../../hooks/useSearchMovies";
import { Link, Navigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const variants = {
  open: {
    height: "100px",
    opacity: 1,
  },
  closed: {
    height: "0",
    opacity: 0,
  },
};

const transition = { type: "spring", duration: 0.1, stiffness: 100 };

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

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [navigateToResults, setNavigateToResults] = useState(false);
  const menuRef = useRef();
  const [clickSearchButton, setClickSearchButton] = useState(false);
  const { moviesSearched } = useSearchMovies(keyword);
  const { width } = useWindowSize();
  const { theme } = useContext(ColorModeContext);

  const handleSearchClick = () => {
    setClickSearchButton(!clickSearchButton);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    hiddenMenu();
    setNavigateToResults(true);
    setTimeout(() => {
      setNavigateToResults(false);
    }, 10);
    console.log(keyword);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  const hiddenMenu = () => {
    document.getElementById("search-menu").style.display = "none";
    setIsOpen(false);
  };

  const showMenu = () => {
    document.getElementById("search-menu").style.display = "block";
    setIsOpen(true);
  };

  useEffect(() => {
    const handler = (event) => {
      if (!menuRef.current?.contains(event.target)) {
        setIsOpen(false);
        document.getElementById("search-menu").style.display = "none";
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <>
      {navigateToResults && <Navigate to={`/search/${keyword}`} replace={true} />}
      <header className={`header ${theme}`}>
        <div className="text">
          <Title />
        </div>
        <section className="header__options">
          <div className="text search-desktop">
            <BsSearch onClick={handleSearchClick} className="search-button" />
            {width > 769 && clickSearchButton && (
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
                </form>
                {keyword !== "" && (
                  <section
                    className={`movies-searched search-${theme}`}
                    id="search-menu"
                    ref={menuRef}
                  >
                    {moviesSearched.map((movie) => (
                      <Link
                        to={`/movies/${movie.id}`}
                        className="search-link text"
                      >
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
                    <p
                      onClick={handleSubmit}
                      className="movies-searched__show-results"
                    >
                      Ver más resultados
                    </p>
                  </section>
                )}
              </motion.section>
            )}
          </div>
          <ChangeColorModeButton />
          <HamburguerMenu />
        </section>
      </header>
      {width < 769 && (
        <motion.section
          className={`search-section ${theme}`}
          initial={false}
          animate={clickSearchButton ? "open" : "closed"}
          variants={variants}
          transition={transition}
        >
          <input
            placeholder="Pelicula o show de TV"
            className="search-section__input"
          />

          <button className="search-section__button">Buscar</button>
        </motion.section>
      )}

      {clickSearchButton && width < 769 && <div className="box-opacity"></div>}
    </>
  );
};

export { Header };
