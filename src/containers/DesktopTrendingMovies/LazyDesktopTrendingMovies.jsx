import React, { Suspense } from "react";
import { useNearScreen } from "../../hooks/useNearScreen";
import { DesktopTrendingMovieLoader } from "../../loaders/DesktopTrendingMovieLoader";

const DesktopTrendingMovies = React.lazy(() => import('./DesktopTrendingMovies'));
const LazyDesktopTrendingMovie = () => {
  
  const { isNearScreen, fromRef } = useNearScreen();

  return (
    <div ref={fromRef}>
      <Suspense fallback={<DesktopTrendingMovieLoader/>}>{isNearScreen ? <DesktopTrendingMovies /> : <DesktopTrendingMovieLoader/>}</Suspense>
    </div>
  );
};

export { LazyDesktopTrendingMovie };