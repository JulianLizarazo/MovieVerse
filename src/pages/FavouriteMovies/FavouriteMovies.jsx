import { useContext } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";
import { FavouriteMovieListContext } from "../../context/FavouriteMovieListContext";

import "./FavouriteMovies.scss";

import { FavouriteMovie } from "../../containers/FavouriteMovie/FavouriteMovie";

const FavouriteMovies = () => {
  const { theme } = useContext(ColorModeContext);
  const { movieList } = useContext(FavouriteMovieListContext);

  return (
    <>
      <main className={` favourite-movies  ${theme}`}>
        <h2 className="text">Mis peliculas favoritas</h2>
        <section className="favourite-movies__list text">
          {movieList.favouriteMoviesList.map((favouriteMovie) => (
            <FavouriteMovie
              movieId={favouriteMovie.id}
              movieTitle={favouriteMovie.title}
              moviePoster={favouriteMovie.poster}
              moviePosterAlt={favouriteMovie.alt}
              key={favouriteMovie.id}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export { FavouriteMovies };
