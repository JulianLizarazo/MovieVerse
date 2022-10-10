import { useContext } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";
import { useMovieImages } from "../../hooks/useMovieImages";

import { SwiperMovieGallery } from "../SwiperMovieGallery/SwiperMovieGallery";
import "./MovieGalleryImages.scss";

const MovieGalleryImages = ({ idMovie }) => {
  const { theme } = useContext(ColorModeContext);
  const { movieImages } = useMovieImages(idMovie);

  return (
    <section className={`movie-gallery-images ${theme}`}>
      <h2 className="movie-gallery-images__title text">Image Gallery</h2>

      <SwiperMovieGallery title="Backdrop" imageType={movieImages?.backdrops} />
    </section>
  );
};

export { MovieGalleryImages };
