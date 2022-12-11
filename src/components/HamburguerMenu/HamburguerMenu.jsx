import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";
import { FavouriteMovieListContext } from "../../context/FavouriteMovieListContext";
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

  const { movieList } = useContext(FavouriteMovieListContext);


  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <nav className="container">
      <div className="icon">
        <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      </div>
      <motion.div
        className={`menu-container ${theme}`}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={transtition}
      >
        <h3>My Favourite Movies</h3>

        <section>
          {movieList.favouriteMoviesList.map(favouriteMovie => (
            <p>{favouriteMovie.id}</p>
          ))}
        </section>
      </motion.div>
    </nav>
  );
};

export { HamburguerMenu };
