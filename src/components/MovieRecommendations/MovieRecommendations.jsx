import { useContext } from "react";
import { MovieByGenre } from "../MovieByGenre/MovieByGenre";
import { ColorModeContext } from "../../context/ColorModeContext";
import "./MovieRecommendations.scss";

export default function MovieRecommendations({ movieRecommendations }) {
  
  const { theme } = useContext(ColorModeContext);

  const handleReload = () => {
    location.reload();
  };

  return (
    <section className={`movie-recommendations ${theme}`}>
      <h2 className="text">Recomendaciones</h2>
      <section className={`movie-recommendations__movie text scroll-horizontal-${theme}`}>
        {movieRecommendations?.map((movieRecommendation) => (
          <div onClick={handleReload} key={movieRecommendation.id}>
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
