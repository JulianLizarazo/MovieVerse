import { LazyMovieGalleryImages } from "../../components/MovieGalleryImages/LazyMovieGalleryImages";

import { LazyMovieGeneralInfo } from "../../components/MovieGeneralInfo/LazyMovieGeneralInfo";

import { LazyMoviePresentation } from "../../components/MoviePresentation/LazyMoviePresentation";
import { LazyMovieProductionCompanies } from "../../components/MovieProductionCompanies/LazyMovieProductionCompanies";
import { LazyMovieRecommendations } from "../../components/MovieRecommendations/LazyMovieRecommendations";

import "./MovieDesktop.scss";

const MovieDesktop = ({ movie }) => {
  return (
    <>
      <LazyMoviePresentation
        poster_path={movie.poster_path}
        title={movie.title}
        genres={movie.genres}
        backdrop_path={movie.backdrop_path}
        overview={movie.overview}
      />

      <LazyMovieGeneralInfo
        id={movie.id}
        original_language={movie.original_language}
        vote_count={movie.vote_count}
        release_date={movie.release_date}
        budget={movie.budget}
        revenue={movie.revenue}
      />

      <LazyMovieProductionCompanies
        productionCompanies={movie.production_companies}
      />

      <LazyMovieGalleryImages idMovie={movie.id} />

      <LazyMovieRecommendations idMovie={movie.id} />
    </>
  );
};

export { MovieDesktop };
