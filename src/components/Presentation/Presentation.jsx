import { useContext, useState } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";
import { useTrendingMovies } from "../../hooks/useTrendingMovies";
import { useParallax } from "react-scroll-parallax";
import { AiOutlineHeart, AiFillHeart, AiOutlineSearch } from "react-icons/ai";
import { motion } from "framer-motion";
import "./Presentation.scss";

const favouriteAnimation = {
  scale: 1.1,
};

const searchAnimation = {
  width: "200px",
  height: "50px",
  borderRadius: "10px",
  border: "2px solid gray",
  display: "flex",
  alignItems: "center",
};

const Image = ({ path, alt }) => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${path}`}
        width="250px"
        height="350px"
        loading="lazy"
        alt={alt}
      />
    </div>
  );
};

const Presentation = () => {
  const { theme } = useContext(ColorModeContext);
  const { trendingMovies } = useTrendingMovies();
  const [animationFavourite, setAnimationFavourite] = useState(false);
  const [animationSearch, setAnimationSearch] = useState(false);

  const parallaxDown1 = useParallax({
    translateY: [-150, 100],
    startScroll: 0,
    endScroll: 700,
  });
  const parallaxDown2 = useParallax({
    translateY: [-150, 100],
    startScroll: 0,
    endScroll: 700,
  });
  const parallaxUp = useParallax({
    translateY: [10, 0],
  });
  const parallaxText = useParallax({
    translateX: [-50, 118],
    startScroll: 1,
    endScroll: 1600,
  });
  const parallaxText2 = useParallax({
    translateX: [200, 58],
    startScroll: 1300,
    endScroll: 2800,
  });

  const parallaxFavourite = useParallax({
    translateX: [-50, 28],
    startScroll: 1300,
    endScroll: 2800,
    onExit: () => setAnimationFavourite(!animationFavourite),
  });

  const parallaxText3 = useParallax({
    translateX: [-100, 37],
    startScroll: 2800,
    endScroll: 5000,
  });

  const parallaxSearch = useParallax({
    translateX: [200, 58],
    startScroll: 2800,
    endScroll: 5000,
    onExit: () => setAnimationSearch(!animationSearch),
  });

  return (
    <>
      <section className={`presentation ${theme}`}>
        <div className="text presentation__content">
          <h2>Bienvenido a MovieVerse</h2>
        </div>

        <section className="text presentation__introduction">
          <div className="presentation__introduction-images">
            <div ref={parallaxDown1.ref}>
              <Image path={trendingMovies[0]?.poster} alt={trendingMovies[0]?.alt}/>
            </div>
            <div ref={parallaxUp.ref}>
              <Image path={trendingMovies[1]?.poster} alt={trendingMovies[1]?.alt}/>
            </div>
            <div ref={parallaxDown2.ref}>
              <Image path={trendingMovies[2]?.poster} alt={trendingMovies[2]?.alt}/>
            </div>
          </div>
          <p ref={parallaxText.ref}>Encuentra información de peliculas que conoces </p>
        </section>
      </section>
      <section className="text favourites">
        <section className="favourites__content">
          <div ref={parallaxFavourite.ref}>
            {!animationFavourite ? (
              <AiOutlineHeart className="favourite-icon" />
            ) : (
              <motion.div animate={favouriteAnimation}>
                <AiFillHeart className="favourite-icon" />
              </motion.div>
            )}
          </div>
          <p ref={parallaxText2.ref}>Añadelas a tu lista de favoritos</p>
        </section>
      </section>
      <section className="text search-unknown-movies">
        <section className="search-unknown-movies__content">
          <p ref={parallaxText3.ref}>Descubre nuevas peliculas</p>
          <div ref={parallaxSearch.ref}>
            {!animationSearch ? (
              <AiOutlineSearch className="search-animation" />
            ) : (
              <motion.div animate={searchAnimation}>
                <AiOutlineSearch className="search-animation" />
              </motion.div>
            )}
          </div>
        </section>
      </section>
    </>
  );
};

export { Presentation };
