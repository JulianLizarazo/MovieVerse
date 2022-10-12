import React, { Suspense } from "react";
import { useNearScreen } from "../../hooks/useNearScreen";
import { MoviePageRecommendationsLoader } from "../../loaders/MoviePageRecommendationsLoader";

const MovieRecommendations = React.lazy(() => import("./MovieRecommendations"));
const LazyMovieRecommendations = ({ idMovie }) => {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "20px" });

  return (
    <div ref={fromRef}>
      <Suspense fallback={<MoviePageRecommendationsLoader />}>
        {isNearScreen ? (
          <MovieRecommendations idMovie={idMovie} />
        ) : (
          <MoviePageRecommendationsLoader />
        )}
      </Suspense>
    </div>
  );
};

export { LazyMovieRecommendations };
