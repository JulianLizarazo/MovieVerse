import { useContext } from "react";
import { useParams } from "react-router-dom";
import { LazyMoviesByGenre } from "../../containers/MoviesByGenre/LazyMoviesByGenre";
import { ColorModeContext } from "../../context/ColorModeContext";
import "./MovieSearchResults.scss";

const MovieSearchResults = () => {
  const { id } = useParams();
  const { theme } = useContext(ColorModeContext);


  return (
    <main className={`movie-search-results ${theme} `}>
      <div className="text">
        <h2>Resultados para "{id}"</h2>
        <LazyMoviesByGenre content="searchResults" />
      </div>
    </main>
  );
};

export { MovieSearchResults };
