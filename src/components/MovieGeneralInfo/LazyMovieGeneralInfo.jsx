import React, { Suspense } from "react";
import { useNearScreen } from "../../hooks/useNearScreen";
import { MoviePageGeneralInfoLoader } from "../../loaders/MoviePageGeneralInfoLoader";

const MovieGeneralInfo = React.lazy(() => import("./MovieGeneralInfo"));
const LazyMovieGeneralInfo = ({
  id,
  original_language,
  vote_count,
  release_date,
  budget,
  revenue,
}) => {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "20px" });

  return (
    <div ref={fromRef}>
      <Suspense fallback={<MoviePageGeneralInfoLoader />}>
        {isNearScreen ? (
          <MovieGeneralInfo
            id={id}
            original_language={original_language}
            vote_count={vote_count}
            release_date={release_date}
            budget={budget}
            revenue={revenue}
          />
        ) : (
          <MoviePageGeneralInfoLoader />
        )}
      </Suspense>
    </div>
  );
};

export { LazyMovieGeneralInfo };
