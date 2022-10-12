import React, { Suspense } from "react";
import { useNearScreen } from "../../hooks/useNearScreen";
import { MoviePageGalleryImagesLoader } from "../../loaders/MoviePageGalleryImagesLoader";

const MovieGalleryImages = React.lazy(() => import("./MovieGalleryImages"));
const LazyMovieGalleryImages = ({ idMovie }) => {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "20px" });

  return (
    <div ref={fromRef}>
      <Suspense fallback={<MoviePageGalleryImagesLoader />}>
        {isNearScreen ? (
          <MovieGalleryImages idMovie={idMovie} />
        ) : (
          <MoviePageGalleryImagesLoader />
        )}
      </Suspense>
    </div>
  );
};

export { LazyMovieGalleryImages };
