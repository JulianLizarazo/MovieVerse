import React, { Suspense } from "react";
import { useMovieImages } from "../../hooks/useMovieImages";
import { useNearScreen } from "../../hooks/useNearScreen";
import { MoviePageGalleryImagesLoader } from "../../loaders/MoviePageGalleryImagesLoader";

const MovieGalleryImages = React.lazy(() => import("./MovieGalleryImages"));
const LazyMovieGalleryImages = ({ idMovie }) => {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "20px" });
  const { movieImages, loading } = useMovieImages(idMovie);

  return (
    <div ref={fromRef}>
      <Suspense fallback={<MoviePageGalleryImagesLoader />}>
        {(isNearScreen && !loading) ? (
          <MovieGalleryImages movieImages={movieImages} />
        ) : (
          <MoviePageGalleryImagesLoader />
        )}
      </Suspense>
    </div>
  );
};

export { LazyMovieGalleryImages };
