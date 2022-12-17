import { useContext } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FavouriteMovieListContext } from "../../context/FavouriteMovieListContext";

import { useState } from "react";
import { useEffect } from "react";
import { MoviePageDesktopButton } from "./Subcomponents/MoviePageDesktopButton";
import "./AddToFavouritesButton.scss";
import { useAddedAnimationConfirmation } from "../../hooks/useAddedAnimationConfirmation";
import { NoticeSlideModal } from "../NoticeSlideModal/NoticeSlideModal";
import { MoviePageMobileButton } from "./Subcomponents/MoviePageMobileButton";

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

const TrendingDesktopButton = ({
  handleAddToFavouriteList,
  movieId,
  moviePoster,
  moviePosterAlt,
  movieTitle,
}) => {
  return (
    <button
      className="trending-desktop"
      onClick={handleAddToFavouriteList(
        movieId,
        moviePoster,
        moviePosterAlt,
        movieTitle
      )}
    >
      Boton de tendencia pa
    </button>
  );
};

const TrendingMobileButton = ({
  handleAddToFavouriteList,
  movieId,
  moviePoster,
  moviePosterAlt,
  movieTitle,
}) => {
  return (
    <AiOutlineHeart
      className="favourite"
      onClick={handleAddToFavouriteList(
        movieId,
        moviePoster,
        moviePosterAlt,
        movieTitle
      )}
    />
  );
};



export { AddToFavouritesButton };
