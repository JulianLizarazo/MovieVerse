
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MovieDesktop } from "../../containers/MovieDesktop/MovieDesktop";
import { MovieMobile } from "../../containers/MovieMobile/MovieMobile";
import { ColorModeContext } from "../../context/ColorModeContext";
import { useWindowSize } from "../../hooks/useWindowSize";


const Movie = () => {
  const { idMovie } = useParams();

  const { width } = useWindowSize();

  const { theme } = useContext(ColorModeContext);

  return (
    <main className={`${theme}`}>
      {width < 1023 ? <MovieMobile idMovie={idMovie}/> : <MovieDesktop idMovie={idMovie} />}
    </main>
  );
};

export { Movie };
