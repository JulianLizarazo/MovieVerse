import { useContext } from "react";
import { useParams } from "react-router-dom";
import { LazyMoviesByGenre } from "../../containers/MoviesByGenre/LazyMoviesByGenre";


import { ColorModeContext } from "../../context/ColorModeContext";
import { useGenres } from "../../hooks/useGenres";

import "./GenrePage.scss";

const GenrePage = () => {
  const { idGenre } = useParams();
  const { theme } = useContext(ColorModeContext);
  const { getGenre } = useGenres();

  return (
    <main className={`genre-page ${theme}`}>
      <div className="text">
        <h2 className="genre-page__title">{getGenre(idGenre)}</h2>
        <LazyMoviesByGenre/>
      </div>
    </main>
  );
};

export { GenrePage };
