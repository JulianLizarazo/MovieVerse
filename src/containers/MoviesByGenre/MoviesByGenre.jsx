import "./MoviesByGenre.scss";
import { MovieByGenre } from "../../components/MovieByGenre/MovieByGenre";
import { useMoviesByGenre } from "../../hooks/useMoviesByGenre";
import { useParams } from "react-router-dom";
import { useNearScreen } from "../../hooks/useNearScreen";
import { useCallback, useEffect } from "react";
import debounce from "just-debounce-it";

export default function MoviesByGenre() {
  const { idGenre } = useParams();
  const { moviesByGenre, setPage} = useMoviesByGenre(idGenre);
  const { isNearScreen, fromRef } = useNearScreen({ once: false });



  const debounceHandleNextPage = useCallback(
    
    debounce(() => setPage(prevPage => prevPage + 1), 200),
    []
  );

  useEffect(() => {
    if (isNearScreen) {
      debounceHandleNextPage();
    }
  }, [debounceHandleNextPage, isNearScreen]);
  return (
    <>
      <section className="genre-page__movie">
        {moviesByGenre.map((movieByGenre) => (
          <MovieByGenre
            key={movieByGenre.id}
            id={movieByGenre.id}
            title={movieByGenre.title}
            poster={movieByGenre.poster_path}
            voteAverage={movieByGenre.vote_average}
          />
        ))}
        <div id="viewfinder" ref={fromRef}></div>
      </section>
    </>
  );
}
