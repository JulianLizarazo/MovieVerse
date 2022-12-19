import { useContext } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";


import { SwiperMovieGallery } from "../SwiperMovieGallery/SwiperMovieGallery";
import "./MovieGalleryImages.scss";

export default function MovieGalleryImages({ movieImages }){
  const { theme } = useContext(ColorModeContext);
  

  return (
    <section className={`movie-gallery-images ${theme}`}>
      <h2 className="movie-gallery-images__title text">Galería</h2>

      <SwiperMovieGallery title="Backdrop" imageType={movieImages?.backdrops} />
    </section>
  );
};


