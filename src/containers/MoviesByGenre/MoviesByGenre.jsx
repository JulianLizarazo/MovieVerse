import "./MoviesByGenre.scss";
import { MovieByGenre } from "../../components/MovieByGenre/MovieByGenre";
import { useMoviesByGenre } from "../../hooks/useMoviesByGenre";
import { useParams } from "react-router-dom";

export default function MoviesByGenre() {
  const { idGenre } = useParams();
  const {moviesByGenre, setPage, page} = useMoviesByGenre(idGenre);

  const handleNextPage = () => {
    setPage(page+1);
  }

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
      </section>
      <button onClick={handleNextPage}>Get Next Page</button>
    </>
  );
};

