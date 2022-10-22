import React, { Suspense } from "react";
import { useMovies } from "../../hooks/useMovies";
import { useNearScreen } from "../../hooks/useNearScreen";
import { MoviePagePresentationLoader } from "../../loaders/MoviePagePresentationLoader";



const MoviePresentationMobile = React.lazy(() => import("./MoviePresentationMobile"));
 const MovieOverviewMobile = React.lazy(() => import("../MovieOverviewMobile/MovieOverviewMobile"));
const LazyMoviePresentationMobile = ({
 idMovie
  
}) => {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "150px" });
  const { movie, loading } = useMovies(idMovie);
  
  return (
    <div ref={fromRef}>
      <Suspense fallback={<MoviePagePresentationLoader/>}>
        {(isNearScreen && !loading) ? (
          <>
            <MoviePresentationMobile
              poster_path={movie.poster_path}
              title={movie.title}
              genres={movie.genres}
              backdrop_path={movie.backdrop_path}
            />
            <MovieOverviewMobile overview={movie.overview} />
          </>
        ) : (
          <MoviePagePresentationLoader/>
        )}
      </Suspense>
    </div>
  );
};

export { LazyMoviePresentationMobile };
