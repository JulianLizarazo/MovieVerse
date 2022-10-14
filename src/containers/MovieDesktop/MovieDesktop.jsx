import { LazyMovieGalleryImages } from "../../components/MovieGalleryImages/LazyMovieGalleryImages";

import { LazyMovieGeneralInfo } from "../../components/MovieGeneralInfo/LazyMovieGeneralInfo";

import { LazyMoviePresentation } from "../../components/MoviePresentation/LazyMoviePresentation";
import { LazyMovieProductionCompanies } from "../../components/MovieProductionCompanies/LazyMovieProductionCompanies";
import { LazyMovieRecommendations } from "../../components/MovieRecommendations/LazyMovieRecommendations";

import "./MovieDesktop.scss";

const MovieDesktop = ({ idMovie }) => {
  return (
    <>
      <LazyMoviePresentation idMovie={idMovie} />

      <LazyMovieGeneralInfo id={idMovie} />

      <LazyMovieProductionCompanies idMovie={idMovie} />

      <LazyMovieGalleryImages idMovie={idMovie} />

      <LazyMovieRecommendations idMovie={idMovie} />
    </>
  );
};

export { MovieDesktop };
