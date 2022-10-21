import "./SwiperMovieGallery.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { useContext, useRef } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";
import { useWindowSize } from "../../hooks/useWindowSize";

const animateProps = {
  scale: 1.5,
  textShadow: "0px 0px 8px rgb(255,255,255)",
};

const SwiperMovieGallery = ({ imageType }) => {
  const { theme } = useContext(ColorModeContext);
  const { width } = useWindowSize();

  const ref = useRef(null);

  return (
    <section className="section text">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectFade,
        ]}
        slidesPerView={1}
        effect={"fade"}
        speed={1000}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        ref={ref}
        className="movie-gallery-images__backdrop"
      >
        {imageType?.map((image) => (
          <SwiperSlide className="movie-gallery-images__backdrop--slide">
            <img
              src={`https://image.tmdb.org/t/p/w1280${image.file_path}`}
              loading="lazy"
              className="gallery-img"
            />
          </SwiperSlide>
        ))}

        {width > 1023 && (
          <>
            <motion.div
              whileHover={animateProps}
              id="gallery-next-button"
              onClick={() => ref.current.swiper.slideNext()}
            >
              <AiFillRightCircle
                className={`gallery-icon gallery-icon-${theme}`}
              />
            </motion.div>
            <motion.div
              whileHover={animateProps}
              id="gallery-previous-button"
              onClick={() => ref.current.swiper.slidePrev()}
            >
              <AiFillLeftCircle
                className={`gallery-icon gallery-icon-${theme}`}
              />
            </motion.div>
          </>
        )}
      </Swiper>
    </section>
  );
};

export { SwiperMovieGallery };
