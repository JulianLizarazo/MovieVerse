import "./MoviesByGenre.scss";
import { MovieByGenre } from "../../components/MovieByGenre/MovieByGenre";
import { useMoviesByGenre } from "../../hooks/useMoviesByGenre";
import { useParams } from "react-router-dom";
import { useNearScreen } from "../../hooks/useNearScreen";
import { useCallback, useEffect, useRef, useState } from "react";
import debounce from "just-debounce-it";
import { InfiniteScrollingMovieLoader } from "../../loaders/InfiniteScrollingMovieLoader";

export default function MoviesByGenre() {
  const [infiniteLoading, setInfiniteLoading] = useState(false);
  const { idGenre } = useParams();
  const { moviesByGenre, setPage, loading } = useMoviesByGenre(idGenre);
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    []
  );

  useEffect(() => {
    if (isNearScreen) {
      debounceHandleNextPage();
    }
  }, [debounceHandleNextPage, isNearScreen]);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setInfiniteLoading(true);
      }, 300);
    }
  }, [loading]);

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
        {infiniteLoading && <InfiniteScrollingMovieLoader />}
        <div id="viewfinder" ref={externalRef}></div>
      </section>
    </>
  );
}
