import { useTrendingMovies } from "../../hooks/useTrendingMovies";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "./DesktopTrendingMovies.scss";
import { DesktopTrendingMovie } from "../../components/DesktopTrendingMovie/DesktopTrendingMovie";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { useRef } from "react";
import { IMAGES_URL } from "../../api/images";

const animateProps = {
  scale: 1.5,
  textShadow: "0px 0px 8px rgb(255,255,255)",
};

export default function DesktopTrendingMovies(){
  const { trendingMovies } = useTrendingMovies();
  const swiperRef = useRef(null);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
      slidesPerView={1}
      effect={"fade"}
      speed={1000}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      className="swiper"
      ref={swiperRef}
    >
      {trendingMovies.map((trendingMovie) => (
        <SwiperSlide className="trending-movies-img" key={trendingMovie.id}>
          <div
            style={{
              backgroundImage: `url(${IMAGES_URL}original${trendingMovie.poster})`,
            }}
            className="trending-movies-img__container"
            aria-label={trendingMovie.alt}
          >
            <DesktopTrendingMovie
              key={trendingMovie.id}
              id={trendingMovie.id}
              title={trendingMovie.title}
              voteAverage={trendingMovie.voteAverage}
              overview={trendingMovie.overview}
              poster={trendingMovie.poster}
              alt={trendingMovie.alt}
            />
          </div>
        </SwiperSlide>
      ))}
      <motion.div
        whileHover={animateProps}
        id="next-button"
        onClick={() => swiperRef.current.swiper.slideNext()}
      >
        <AiFillRightCircle className="slider-icon" />
      </motion.div>
      <motion.div
        whileHover={animateProps}
        id="previous-button"
        onClick={() => swiperRef.current.swiper.slidePrev()}
      >
        <AiFillLeftCircle className="slider-icon" />
      </motion.div>
    </Swiper>
  );
};


