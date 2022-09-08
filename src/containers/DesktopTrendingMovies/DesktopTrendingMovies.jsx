import { useTrendingMovies } from "../../hooks/useTrendingMovies";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./DesktopTrendingMovies.scss";
import { DesktopTrendingMovie } from "../../components/DesktopTrendingMovie/DesktopTrendingMovie";

const DesktopTrendingMovies = () => {
  const { trendingMovies } = useTrendingMovies();

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      loop={true}
    >
      {trendingMovies.map((trendingMovie) => (
        <SwiperSlide className="trending-movies-img">
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${trendingMovie.poster})`,
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
    </Swiper>
  );
};

export { DesktopTrendingMovies };
