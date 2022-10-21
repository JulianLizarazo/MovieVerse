import { useContext } from "react";
import { Link } from "react-router-dom";
import { ColorModeContext } from "../../context/ColorModeContext";
import "./MoviePresentationMobile.scss";

export default function MoviePresentationMobile({
  poster_path,
  title,
  genres,
  backdrop_path,
}) {
  const styles = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w780${backdrop_path})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const { theme } = useContext(ColorModeContext);

  return (
    <>
      <section className="movie-presentation-mobile" style={styles}>
        <img
          src={`https://image.tmdb.org/t/p/w342${poster_path}`}
          loading="lazy"
        />
      </section>
      <section className={`movie-mobile-title-and-genres ${theme}`}>
        <h2 className="movie-mobile-title-and-genres__title text">{title}</h2>
        <div className="movie-mobile-title-and-genres__genres text">
          {genres.map((genre) => (
            <Link to={`/${genre.id}`} className="link">
              <span className={`text genre-mobile-${theme}`}>{genre.name}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
