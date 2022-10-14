import React, { Suspense } from "react";
import { useMovieRecommendations } from "../../hooks/useMovieRecommendations";
import { useNearScreen } from "../../hooks/useNearScreen";
import { MoviePageRecommendationsLoader } from "../../loaders/MoviePageRecommendationsLoader";

const MovieRecommendations = React.lazy(() => import("./MovieRecommendations"));
const LazyMovieRecommendations = ({ idMovie }) => {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "20px" });
  const { movieRecommendations, loading } = useMovieRecommendations(idMovie);

  return (
    <div ref={fromRef}>
      <Suspense fallback={<MoviePageRecommendationsLoader />}>
        {isNearScreen ? (
          <MovieRecommendations movieRecommendations={movieRecommendations} />
        ) : (
          <MoviePageRecommendationsLoader />
        )}
      </Suspense>
    </div>
  );
};

export { LazyMovieRecommendations };
