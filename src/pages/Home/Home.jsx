import { useContext } from "react";
import { About } from "../../containers/About/About";
import { LazyDesktopTrendingMovie } from "../../containers/DesktopTrendingMovies/LazyDesktopTrendingMovies";
import { LazyGenres } from "../../containers/Genres/LazyGenres";
import { LazyTrendingMovie } from "../../containers/TrendingMovies/LazyTrendingMovies";
import { ColorModeContext } from "../../context/ColorModeContext";
import { useWindowSize } from "../../hooks/useWindowSize";

const Home = () => {
  const { theme } = useContext(ColorModeContext);
  const { width } = useWindowSize();

  return (
    <main className={`home ${theme}`}>
      {width < 1023 ? (
        <>
          <LazyTrendingMovie />
          <About/>
        </>
      ) : (
        <>
          <LazyDesktopTrendingMovie />
          <About/>
        </>
      )}

      <LazyGenres />
    </main>
  );
};

export { Home };
