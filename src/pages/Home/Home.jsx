import { useContext } from "react";
import { Presentation } from "../../components/Presentation/Presentation";
import { DesktopTrendingMovies } from "../../containers/DesktopTrendingMovies/DesktopTrendingMovies";
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
          <Presentation />
          <LazyTrendingMovie />
        </>
      ) : (
        <>
          <DesktopTrendingMovies />
          <Presentation />
        </>
      )}

      <LazyGenres />
    </main>
  );
};

export { Home };
