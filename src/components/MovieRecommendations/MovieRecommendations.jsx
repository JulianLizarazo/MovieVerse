import { useContext } from "react";
import { useMovieRecommendations } from "../../hooks/useMovieRecommendations";
import { MovieByGenre } from "../MovieByGenre/MovieByGenre";
import { ColorModeContext } from "../../context/ColorModeContext";
import "./MovieRecommendations.scss";

export default function MovieRecommendations({ idMovie }) {
  const { movieRecommendations } = useMovieRecommendations(idMovie);
  const { theme } = useContext(ColorModeContext);

  const handleReload = () => {
    location.reload();
  };

  return (
    <section className={`movie-recommendations ${theme}`}>
      <h2 className="text">Recommendations</h2>
      <section className={`movie-recommendations__movie text`}>
        {movieRecommendations?.map((movieRecommendation) => (
          <div onClick={handleReload}>
            <MovieByGenre
              id={movieRecommendation.id}
              title={movieRecommendation.title}
              poster={movieRecommendation.poster_path}
              voteAverage={movieRecommendation.vote_average}
            />
          </div>
        ))}
      </section>
    </section>
  );
}
