import React, { Suspense } from "react";
import { useNearScreen } from "../../hooks/useNearScreen";

const TrendingMovies = React.lazy(() => import('./TrendingMovies'));

const LazyTrendingMovie = () => {
  const { isNearScreen, fromRef } = useNearScreen();

  return (
    <div ref={fromRef}>
      <Suspense fallback={'<p>Cargando....</p>'}>{isNearScreen ? <TrendingMovies /> : null}</Suspense>
    </div>
  );
};

export { LazyTrendingMovie };
