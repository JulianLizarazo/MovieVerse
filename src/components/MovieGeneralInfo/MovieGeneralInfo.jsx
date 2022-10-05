import { useContext } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";
import "./MovieGeneralInfo.scss";

const MovieGeneralInfo = ({
  original_language,
  vote_count,
  release_date,
  budget,
  revenue,
}) => {
  const { theme } = useContext(ColorModeContext);
  return (
    <section className={`general-info ${theme}`}>
      <section className="general-info__cast">askjasjaslkjaskljaskjlas</section>
      <aside className="general-info__aside  text third">
        <h3>Estadisticas</h3>
        <span>Lenguaje original: {original_language}</span>
        <span>Total votos: {vote_count}</span>
        <span>Fecha estreno: {release_date}</span>
        <span>Presupuesto: {budget}</span>
        <span>Ingresos generados: {revenue}</span>
      </aside>
    </section>
  );
};

export { MovieGeneralInfo };
