import { useContext} from "react";
import { ColorModeContext } from "../../context/ColorModeContext";
import { useTrendingMovies } from "../../hooks/useTrendingMovies";
import { useParallax } from "react-scroll-parallax";
import "./Presentation.scss";

const Image = ({ path }) => {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${path}`} width="200px" height="300px"/>
    </div>
  );
};

const Presentation = () => {
  const { theme } = useContext(ColorModeContext);
  const { trendingMovies } = useTrendingMovies();
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
    translateX: [-50,38],
    startScroll: 1,
    endScroll: 1300,
    
  })

  return (
    <>
    <section className={`presentation ${theme}`}>
      <div className="text presentation__content">
        <h2>Bienvenido a MovieVerse</h2>
      </div>

      <section className="text presentation__introduction">
        <div className="presentation__introduction-images">
          <div ref={parallaxDown1.ref}>
            <Image path={trendingMovies[0]?.poster} />
          </div>
          <div ref={parallaxUp.ref}>
            <Image path={trendingMovies[1]?.poster} />
          </div>
          <div ref={parallaxDown2.ref}>
            <Image path={trendingMovies[2]?.poster} />
          </div>
        </div>
        <p ref={parallaxText.ref} >Encuentra tus peliculas favoritas</p>
      </section>

    </section>
      <section>
        sadjklasjjklas
      </section>
    </>
  );
};

export { Presentation };
