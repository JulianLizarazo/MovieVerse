import { TrendingMovie } from "../../components/TrendingMovie/TrendingMovie";
import { useTrendingMovies } from "../../hooks/useTrendingMovies";
import "./TrendingMovies.scss"; 


const TrendingMovies = () => {
  const { trendingMovies } = useTrendingMovies();

  return (
    <section className="trending-movies">
      <h2>Tendencias</h2>
      {trendingMovies.map((trendingMovie) => (
        <TrendingMovie
          key={trendingMovie.id}
          id={trendingMovie.id}
          title={trendingMovie.title}
          alt={trendingMovie.alt}
          poster={trendingMovie.poster}
        />
      ))}
    </section>
  );
};

export { TrendingMovies };
