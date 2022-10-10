import { Link } from "react-router-dom";
import { MovieGalleryImages } from "../../components/MovieGalleryImages/MovieGalleryImages";
import { MovieGeneralInfo } from "../../components/MovieGeneralInfo/MovieGeneralInfo";
import { MovieOverview } from "../../components/MovieOverview/MoveOverview";
import { MovieProductionCompanies } from "../../components/MovieProductionCompanies/MovieProductionCompanies";
import { MovieVideos } from "../../components/MovieVideos/MovieVideos";
import "./MovieDesktop.scss";

const MovieDesktop = ({ movie }) => {
  const styles = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <section className="movie-desktop__main-info" style={styles}>
        <section className="movie-desktop__main-info--title">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            width="250px"
            height="350px"
            alt={`Pelicula ${movie.title}`}
            loading="lazy"
          />
          <div className="movie-desktop__main-info--text">
            <h2>{movie.title}</h2>
            <div>
              {movie?.genres?.map((genre) => (
                <Link to={`/${genre.id}`} className="link">
                  <span>{genre.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </section>

      <MovieOverview overview={movie.overview} />
      <MovieGeneralInfo
        id={movie.id}
        original_language={movie.original_language}
        vote_count={movie.vote_count}
        release_date={movie.release_date}
        budget={movie.budget}
        revenue={movie.revenue}
      />

      <MovieProductionCompanies
        productionCompanies={movie.production_companies}
      />

      <MovieGalleryImages idMovie={movie.id}/>

      <MovieVideos />
    </>
  );
};

export { MovieDesktop };
