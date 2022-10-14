import React, { Suspense } from "react";
import { useMovies } from "../../hooks/useMovies";
import { useNearScreen } from "../../hooks/useNearScreen";
import { MoviePageGeneralInfoLoader } from "../../loaders/MoviePageGeneralInfoLoader";

const MovieGeneralInfo = React.lazy(() => import("./MovieGeneralInfo"));
const LazyMovieGeneralInfo = ({
  id,
}) => {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "20px" });
  const { movie, loading } = useMovies(id);

  return (
    <div ref={fromRef}>
      <Suspense fallback={<MoviePageGeneralInfoLoader />}>
        {(isNearScreen && !loading) ? (
          <MovieGeneralInfo
            id={movie.id}
            original_language={movie.original_language}
            vote_count={movie.vote_count}
            release_date={movie.release_date}
            budget={movie.budget}
            revenue={movie.revenue}
          />
        ) : (
          <MoviePageGeneralInfoLoader />
        )}
      </Suspense>
    </div>
  );
};

export { LazyMovieGeneralInfo };
