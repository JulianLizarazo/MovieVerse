import React, { Suspense } from "react";
import { useAddedAnimationConfirmation } from "../../hooks/useAddedAnimationConfirmation";
import { useMovies } from "../../hooks/useMovies";
import { useNearScreen } from "../../hooks/useNearScreen";
import { MoviePagePresentationLoader } from "../../loaders/MoviePagePresentationLoader";
import { AddToFavouritesButton } from "../AddToFavouritesButton/AddToFavouritesButton";

const MoviePresentation = React.lazy(() => import("./MoviePresentation"));
const MovieOverview = React.lazy(() => import("../MovieOverview/MoveOverview"));
const LazyMoviePresentation = ({ idMovie }) => {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "150px" });
  const { movie, loading } = useMovies(idMovie);
  const { confirmationToAdded, setConfirmationToAdded } =
    useAddedAnimationConfirmation();

  return (
    <div ref={fromRef}>
      <Suspense fallback={<MoviePagePresentationLoader />}>
        {isNearScreen && !loading ? (
          <>
            <MoviePresentation
              poster_path={movie.poster_path}
              title={movie.title}
              genres={movie.genres}
              backdrop_path={movie.backdrop_path}
            />
            <MovieOverview overview={movie.overview} />
            <AddToFavouritesButton
              movieId={movie.id}
              moviePoster={movie.poster_path}
              moviePosterAlt={`Pelicula ${movie.title}`}
              movieTitle={movie.title}
              whereIsTheButton={"movie-page-desktop"}
              confirmationState={setConfirmationToAdded}
            />
          </>
        ) : (
          <MoviePagePresentationLoader />
        )}
      </Suspense>
    </div>
  );
};

export { LazyMoviePresentation };
