import { useParams } from "react-router-dom";
import { MovieDesktop } from "../../containers/MovieDesktop/MovieDesktop";
import { useMovies } from "../../hooks/useMovies";
import { useWindowSize } from "../../hooks/useWindowSize";
import "./Movie.scss";

const Movie = () => {
  const { idMovie } = useParams();
  const { movie } = useMovies(idMovie);
  const { width } = useWindowSize();
  

  return (
    <main className="movie">
      {width < 1024 ? <div>hola</div> : <MovieDesktop movie={movie}/>}
    </main>
  );
};

export { Movie };
