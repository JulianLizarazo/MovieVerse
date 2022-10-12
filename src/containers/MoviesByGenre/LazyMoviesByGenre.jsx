import React, { Suspense } from "react";
import { useNearScreen } from "../../hooks/useNearScreen";
import { MoviesByGenreLoader } from "../../loaders/MoviesByGenreLoader";

const MoviesByGenre = React.lazy(() => import("./MoviesByGenre"));
const LazyMoviesByGenre = () => {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "150px" });

  return (
    <div ref={fromRef}>
      <Suspense fallback={<MoviesByGenreLoader />}>
        {isNearScreen ? <MoviesByGenre /> : <MoviesByGenreLoader />}
      </Suspense>
    </div>
  );
};

export { LazyMoviesByGenre };
