import { ChangeColorModeButton } from "../../components/ChangeColorModeButton/ChangeColorModeButton";
import { HamburguerMenu } from "../../components/HamburguerMenu/HamburguerMenu";
import { motion } from "framer-motion";
import { Title } from "../../components/Title/Title";
import { BsSearch } from "react-icons/bs";
import "./Header.scss";
import { useContext, useState } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";
import { useWindowSize } from "../../hooks/useWindowSize";

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
  const [clickSearchButton, setClickSearchButton] = useState(false);
  const { width } = useWindowSize();
  const { theme } = useContext(ColorModeContext);

  const handleSearchClick = () => {
    setClickSearchButton(!clickSearchButton);
  };

  return (
    <>
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
                <input
                  placeholder="Pelicula o show de TV"
                  className="search-desktop__input-input"
                />
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
