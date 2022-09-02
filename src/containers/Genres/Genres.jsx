import { useContext } from "react";
import { Genre } from "../../components/Genre/Genre";
import { ColorModeContext } from "../../context/ColorModeContext";
import { useGenres } from "../../hooks/useGenres";
import "./Genres.scss";

export default function Genres() {
  const genres = useGenres();

  const { themes } = useContext(ColorModeContext);
  return (
    <section className={`genres ${themes}`}>
      <div className="text">
        <h2>Géneros</h2>
        <section className="genres__container">
          {genres.map(genre => (
            <Genre key={genre.id} id={genre.id} name={genre.name}/>
            ))}
        </section>
      </div>
    </section>
  );
}
