import React, { Suspense } from "react";
import { useNearScreen } from "../../hooks/useNearScreen";
import { MoviePagePresentationLoader } from "../../loaders/MoviePagePresentationLoader";


const MoviePresentation = React.lazy(() => import("./MoviePresentation"));
const MovieOverview = React.lazy(() => import("../MovieOverview/MoveOverview"));
const LazyMoviePresentation = ({
  poster_path,
  title,
  genres,
  backdrop_path,
  overview,
}) => {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "150px" });

  return (
    <div ref={fromRef}>
      <Suspense fallback={<MoviePagePresentationLoader />}>
        {isNearScreen ? (
          <>
            <MoviePresentation
              poster_path={poster_path}
              title={title}
              genres={genres}
              backdrop_path={backdrop_path}
            />
            <MovieOverview overview={overview} />
          </>
        ) : (
          <MoviePagePresentationLoader />
        )}
      </Suspense>
    </div>
  );
};

export { LazyMoviePresentation };
