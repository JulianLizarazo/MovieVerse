import { useContext, useEffect, useRef, useState } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";
import { FavouriteMovieListContext } from "../../context/FavouriteMovieListContext";
import "./HamburguerMenu.scss";
import { MenuToggle } from "./MenuToggle";
import { FavMovieQuickList } from "../FavMovieQuickList/FavMovieQuickList";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
  let menuRef = useRef();
  const { movieList } = useContext(FavouriteMovieListContext);

  const hiddenMenu = () => {
    document.getElementById("list").style.display = "none";
    if(isOpen){
      setOpen(false);
    }
  };

  const showMenu = () => {
    document.getElementById("list").style.display = "flex";
   
    
  };

  useEffect(() => {
    const handler = (event) => {
      if (!menuRef.current?.contains(event.target)) {
        document.getElementById("list").style.display = "none";
        setTimeout(() => {
          if(isOpen){
            setOpen(false);
          }
        }, 200)
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const toggleMenu = () => {
  
    setOpen(!isOpen);
  };

  return (
    <nav className="container">
      <div className="icon" onClick={!isOpen ? showMenu : hiddenMenu}>
        <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      </div>
      <motion.aside
        className={`menu-container menu-container-${theme} ${theme}`}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={transtition}
        id="list"
        ref={menuRef}
      >
        <h3 className="text">My Favourite Movies</h3>

        <section className={`favourite-movies-section ${theme} scroll-bar-${theme}`}>
          {movieList.favouriteMoviesList.map((favouriteMovie) => (
            <FavMovieQuickList
              idMovie={favouriteMovie.id}
              posterAltMovie={favouriteMovie.alt}
              posterMovie={favouriteMovie.poster}
              titleMovie={favouriteMovie.title}
              key={favouriteMovie.title}
            />
          ))}
        </section>
        {movieList.favouriteMoviesList.length > 10 && (
          <section className={`favourite-page-link  favourite-page-link-${theme}`} onClick={hiddenMenu}>
            <Link to="/favourites">Ver todas las peliculas</Link>
          </section>
        )}
      </motion.aside>
    </nav>
  );
};

export { HamburguerMenu };
