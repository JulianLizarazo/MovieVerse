import React, { Suspense } from "react";
import { useMovies } from "../../hooks/useMovies";
import { useNearScreen } from "../../hooks/useNearScreen";
import { MoviePageProductionCompaniesLoader } from "../../loaders/MoviePageProductionCompaniesLoader";

const MovieProductionCompanies = React.lazy(() =>
  import("./MovieProductionCompanies")
);
const LazyMovieProductionCompanies = ({ idMovie }) => {

  const { isNearScreen, fromRef } = useNearScreen({ distance: "20px" });
  const { movie, loading } = useMovies(idMovie);
  
  return (
    <div ref={fromRef}>
      <Suspense fallback={<MoviePageProductionCompaniesLoader />}>
        {(isNearScreen && !loading) ? (
          <MovieProductionCompanies productionCompanies={movie.production_companies} />
        ) : (
          <MoviePageProductionCompaniesLoader />
        )}
      </Suspense>
    </div>
  );
};

export { LazyMovieProductionCompanies };
