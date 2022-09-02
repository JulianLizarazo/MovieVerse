import { useContext } from "react";
import { Presentation } from "../../components/Presentation/Presentation";
import { LazyGenres } from "../../containers/Genres/LazyGenres";
import { LazyTrendingMovie } from "../../containers/TrendingMovies/LazyTrendingMovies";
import { ColorModeContext } from "../../context/ColorModeContext";

const Home = () => {
  const { theme } = useContext(ColorModeContext);

  return (
    <main className={`home ${theme}`}>
      <Presentation />
      <LazyTrendingMovie />
      <LazyGenres/>
    </main>
  );
};

export { Home };
