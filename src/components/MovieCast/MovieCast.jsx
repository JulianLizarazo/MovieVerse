import { useContext } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";
import { useMovieCredits } from "../../hooks/useMovieCredits";
import "./MovieCast.scss";

const MovieCast = ({ id }) => {
  const { cast } = useMovieCredits(id);
  const { theme } = useContext(ColorModeContext);
  return (
    <section className={`cast ${theme}`}>
      <h2 className="text">Casting</h2>
      <section className={`cast-movie text scroll-horizontal-${theme}`}>
        {cast.map((actor) => (
          <article className={`cast-movie__actor border-${theme}`}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              loading="lazy"
              alt={`Actor ${actor.name}`}
              height="200px"
            
            />
            <span>{actor.name}</span>
          </article>
        ))}
      </section>
    </section>
  );
};

export { MovieCast };
