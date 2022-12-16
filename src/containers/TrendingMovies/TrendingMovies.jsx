import { useContext } from "react";
import { TrendingMovie } from "../../components/TrendingMovie/TrendingMovie";
import { useTrendingMovies } from "../../hooks/useTrendingMovies";
import { ColorModeContext } from "../../context/ColorModeContext";

import "./TrendingMovies.scss";

export default function TrendingMovies() {
  const { trendingMovies } = useTrendingMovies();

  const { theme } = useContext(ColorModeContext);

  return (
    <section className={`trending-movies ${theme}`}>
      <div className="text">
        <h2>Tendencias</h2>
        <section className="trending-movies__container">
          {trendingMovies.map((trendingMovie) => (
            <TrendingMovie
              key={trendingMovie.id}
              id={trendingMovie.id}
              alt={trendingMovie.alt}
              poster={trendingMovie.poster}
              voteAverage={trendingMovie.voteAverage}
              title={trendingMovie.title}
            />
          ))}
        </section>
      </div>
    </section>
  );
}
