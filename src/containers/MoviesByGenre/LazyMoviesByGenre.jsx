import React, { Suspense } from "react";
import { useNearScreen } from "../../hooks/useNearScreen";
import { MoviesByGenreLoader } from "../../loaders/MoviesByGenreLoader";

const MoviesByGenre = React.lazy(() => import("./MoviesByGenre"));
const LazyMoviesByGenre = ({content = "genre"}) => {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "150px" });
  
  return (
    <div ref={fromRef}>
      <Suspense fallback={<MoviesByGenreLoader />}>
        {isNearScreen ? <MoviesByGenre typeOfPage={content} /> : <MoviesByGenreLoader />}
      </Suspense>
    </div>
  );
};

export { LazyMoviesByGenre };
