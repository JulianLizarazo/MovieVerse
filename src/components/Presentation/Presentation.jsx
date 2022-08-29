import { useContext} from "react";
import { ColorModeContext } from "../../context/ColorModeContext";
import "./Presentation.scss";

const Presentation = () => {
  const { theme } = useContext(ColorModeContext);

  return (
    <section className={`presentation ${theme}`}>
      <div className="text presentation__content">
        <h2>Bienvenido a MovieVerse</h2>
        <p>
          Busca información de tus peliculas favoritas, nuevas que te podrian
          interesar, y deja una calificación
        </p>
      </div>
    </section>
  );
};

export { Presentation };
