import React, { Suspense } from "react";
import { useNearScreen } from "../../hooks/useNearScreen";
import { MoviePageProductionCompaniesLoader } from "../../loaders/MoviePageProductionCompaniesLoader";

const MovieProductionCompanies = React.lazy(() =>
  import("./MovieProductionCompanies")
);
const LazyMovieProductionCompanies = ({ productionCompanies }) => {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "20px" });

  return (
    <div ref={fromRef}>
      <Suspense fallback={<MoviePageProductionCompaniesLoader />}>
        {isNearScreen ? (
          <MovieProductionCompanies productionCompanies={productionCompanies} />
        ) : (
          <MoviePageProductionCompaniesLoader />
        )}
      </Suspense>
    </div>
  );
};

export { LazyMovieProductionCompanies };
