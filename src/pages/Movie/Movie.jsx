import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieDesktop } from "../../containers/MovieDesktop/MovieDesktop";
import { useWindowSize } from "../../hooks/useWindowSize";
import "./Movie.scss";

const Movie = () => {
  const { idMovie } = useParams();

  const { width } = useWindowSize();

  return (
    <main className="movie">
      {width < 1023 ? <div>hola</div> : <MovieDesktop idMovie={idMovie} />}
    </main>
  );
};

export { Movie };
