import React, { Suspense } from "react";
import { useMovies } from "../../hooks/useMovies";
import { useNearScreen } from "../../hooks/useNearScreen";
import { MoviePagePresentationLoader } from "../../loaders/MoviePagePresentationLoader";

const MoviePresentation = React.lazy(() => import("./MoviePresentation"));
const MovieOverview = React.lazy(() => import("../MovieOverview/MoveOverview"));
const LazyMoviePresentation = ({ idMovie }) => {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "150px" });
  const { movie, loading } = useMovies(idMovie);

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
              id={movie.id}
            />
            <MovieOverview overview={movie.overview} />
          </>
        ) : (
          <MoviePagePresentationLoader />
        )}
      </Suspense>
    </div>
  );
};

export { LazyMoviePresentation };
