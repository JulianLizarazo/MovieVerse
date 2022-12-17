import { useContext } from "react";
import { FavouriteMovieListContext } from "../../context/FavouriteMovieListContext";
import { MoviePageDesktopButton } from "./Subcomponents/MoviePageDesktopButton";
import "./AddToFavouritesButton.scss";
import { MoviePageMobileButton } from "./Subcomponents/MoviePageMobileButton";
import { TrendingDesktopButton } from "./Subcomponents/TrendingDesktopButton";
import { TrendingMobileButton } from "./Subcomponents/TrendingMobileButton";

const AddToFavouritesButton = ({
  movieId,
  moviePoster,
  moviePosterAlt,
  movieTitle,
  whereIsTheButton,
  confirmationState,
}) => {
  const { addToFavouriteMoviesList } = useContext(FavouriteMovieListContext);
  const handleAddToFavouriteList =
    (idMovie, posterMovie, posterAltMovie, movieTitle, isRepeated = false) =>
    () => {
      if (!isRepeated) {
        addToFavouriteMoviesList(
          idMovie,
          posterMovie,
          posterAltMovie,
          movieTitle
        );
        confirmationState(true);
      }
    };

  switch (whereIsTheButton) {
    case "trending-desktop":
      return (
        <TrendingDesktopButton
          handleAddToFavouriteList={handleAddToFavouriteList}
          movieId={movieId}
          moviePoster={moviePoster}
          moviePosterAlt={moviePosterAlt}
          movieTitle={movieTitle}
        />
      );
    case "trending-mobile":
      return (
        <TrendingMobileButton
          handleAddToFavouriteList={handleAddToFavouriteList}
          movieId={movieId}
          moviePoster={moviePoster}
          moviePosterAlt={moviePosterAlt}
          movieTitle={movieTitle}
        />
      );
    case "movie-page-desktop":
      return (
        <MoviePageDesktopButton
          handleAddToFavouriteList={handleAddToFavouriteList}
          movieId={movieId}
          moviePoster={moviePoster}
          moviePosterAlt={moviePosterAlt}
          movieTitle={movieTitle}
        />
      );
    case "movie-page-mobile":
      return (
        <MoviePageMobileButton
          handleAddToFavouriteList={handleAddToFavouriteList}
          movieId={movieId}
          moviePoster={moviePoster}
          moviePosterAlt={moviePosterAlt}
          movieTitle={movieTitle}
        />
      );
  }
};

export { AddToFavouritesButton };
