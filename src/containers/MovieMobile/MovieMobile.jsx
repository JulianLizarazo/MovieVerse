
import { LazyMovieGalleryImages } from "../../components/MovieGalleryImages/LazyMovieGalleryImages";
import { LazyMovieGeneralInfo } from "../../components/MovieGeneralInfo/LazyMovieGeneralInfo";
import { LazyMoviePresentationMobile } from "../../components/MoviePresentationMobile/LazyMoviePresentationMobile";
import { LazyMovieProductionCompanies } from "../../components/MovieProductionCompanies/LazyMovieProductionCompanies";
import { LazyMovieRecommendations } from "../../components/MovieRecommendations/LazyMovieRecommendations";
import "./MovieMobile.scss";

const MovieMobile = ({ idMovie }) => {
    return(
        <>
        <LazyMoviePresentationMobile idMovie={idMovie}/>
        <LazyMovieGeneralInfo id={idMovie}/>
        <LazyMovieProductionCompanies idMovie={idMovie} />
        <LazyMovieGalleryImages idMovie={idMovie} />
        <LazyMovieRecommendations  idMovie={idMovie} />
        </>
    )
};

export { MovieMobile };