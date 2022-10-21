import React, { Suspense } from "react";
import { useMovies } from "../../hooks/useMovies";
import { useNearScreen } from "../../hooks/useNearScreen";



const MoviePresentationMobile = React.lazy(() => import("./MoviePresentationMobile"));
 const MovieOverviewMobile = React.lazy(() => import("../MovieOverviewMobile/MovieOverviewMobile"));
const LazyMoviePresentationMobile = ({
 idMovie
  
}) => {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "150px" });
  const { movie, loading } = useMovies(idMovie);
  
  return (
    <div ref={fromRef}>
      <Suspense fallback={<p>cargando pa</p>}>
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
          <p>cargando pa</p>
        )}
      </Suspense>
    </div>
  );
};

export { LazyMoviePresentationMobile };
