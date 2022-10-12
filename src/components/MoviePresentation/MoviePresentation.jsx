import "./MovePresentation.scss";
import { Link } from "react-router-dom";

export default function MoviePresentation({ poster_path, title, genres, backdrop_path }){
  const styles = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <section className="movie-desktop__main-info" style={styles}>
      <section className="movie-desktop__main-info--title">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          width="250px"
          height="350px"
          alt={`Pelicula ${title}`}
          loading="lazy"
        />
        <div className="movie-desktop__main-info--text">
          <h2>{title}</h2>
          <div>
            {genres?.map((genre) => (
              <Link to={`/${genre.id}`} className="link">
                <span>{genre.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};


