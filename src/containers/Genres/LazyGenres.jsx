import React, { Suspense } from "react";
import { useNearScreen } from "../../hooks/useNearScreen";
import { TrendingMovieLoader } from "../../loaders/TrendingMovieLoader";

const Genres = React.lazy(() => import('./Genres'));
const LazyGenres = () => {
  
  const { isNearScreen, fromRef } = useNearScreen();

  return (
    <div ref={fromRef}>
      <Suspense fallback={<TrendingMovieLoader/>}>{isNearScreen ? <Genres /> : <TrendingMovieLoader/>}</Suspense>
    </div>
  );
};

export { LazyGenres };