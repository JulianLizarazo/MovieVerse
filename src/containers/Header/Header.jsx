import { ChangeColorModeButton } from "../../components/ChangeColorModeButton/ChangeColorModeButton";
import { HamburguerMenu } from "../../components/HamburguerMenu/HamburguerMenu";
import { motion } from "framer-motion";
import { Title } from "../../components/Title/Title";
import { BsSearch } from "react-icons/bs";
import "./Header.scss";
import { useContext, useState } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";

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
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const Header = () => {
  const [clickSearchButton, setClickSearchButton] = useState(false);
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
        <div className="text">
          <BsSearch onClick={handleSearchClick} className="search-button" />
        </div>
        <ChangeColorModeButton />
        <HamburguerMenu />
      </header>

      <motion.section
        className="search-section"
        initial={false}
        animate={clickSearchButton ? "open" : "closed"}
        variants={variants}
        transition={transition}
      >
        <input placeholder="Pelicula o show de TV" />

        <button>Buscara</button>
      </motion.section>
    </>
  );
};

export { Header };
