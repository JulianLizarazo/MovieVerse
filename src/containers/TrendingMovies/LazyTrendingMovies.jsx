import React, { Suspense } from "react";
import { useNearScreen } from "../../hooks/useNearScreen";
import { TrendingMovieLoader } from "../../loaders/TrendingMovieLoader";

const TrendingMovies = React.lazy(() => import('./TrendingMovies'));
const LazyTrendingMovie = () => {
  
  const { isNearScreen, fromRef } = useNearScreen();

  return (
    <div ref={fromRef}>
      <Suspense fallback={<TrendingMovieLoader/>}>{isNearScreen ? <TrendingMovies /> : <TrendingMovieLoader/>}</Suspense>
    </div>
  );
};

export { LazyTrendingMovie };
