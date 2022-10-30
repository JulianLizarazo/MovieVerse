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
import { Navigate } from "react-router-dom";
import { SearchMovieDesktop } from "../../components/SearchMovieDesktop/SearchMovieDesktop";

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

const Header = () => {
  const [keyword, setKeyword] = useState("");
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
  };

  const showMenu = () => {
    document.getElementById("search-menu").style.display = "block";
  };

  useEffect(() => {
    const handler = (event) => {
      if (!menuRef.current?.contains(event.target)) {
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
      {navigateToResults && (
        <Navigate to={`/search/${keyword}`} replace={true} />
      )}
      <header className={`header ${theme}`}>
        <div className="text">
          <Title />
        </div>
        <section className="header__options">
          <div className="text search-desktop">
            <BsSearch onClick={handleSearchClick} className="search-button" />
            {width > 1023 && clickSearchButton && (
              <SearchMovieDesktop
                moviesSearched={moviesSearched}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                showMenu={showMenu}
                clickSearchButton={clickSearchButton}
                transition={transition}
                keyword={keyword}
                menuRef={menuRef}
                hiddenMenu={hiddenMenu}
              />
            )}
          </div>
          <ChangeColorModeButton />
          <HamburguerMenu />
        </section>
      </header>
      {width < 1023 && (
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
