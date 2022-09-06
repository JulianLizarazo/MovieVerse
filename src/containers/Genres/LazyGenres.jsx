import React, { Suspense } from "react";
import { useNearScreen } from "../../hooks/useNearScreen";
import { GenreLoader } from "../../loaders/GenreLoader";

const Genres = React.lazy(() => import('./Genres'));
const LazyGenres = () => {
  
  const { isNearScreen, fromRef } = useNearScreen("150px");

  return (
    <div ref={fromRef}>
      <Suspense fallback={<GenreLoader/>}>{isNearScreen ? <Genres /> : <GenreLoader/>}</Suspense>
    </div>
  );
};

export { LazyGenres };