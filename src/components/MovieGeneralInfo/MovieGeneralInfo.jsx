import { useContext } from "react";
import { MovieCast } from "../../components/MovieCast/MovieCast";
import { ColorModeContext } from "../../context/ColorModeContext";
import "./MovieGeneralInfo.scss";

export default function MovieGeneralInfo({
  id,
  original_language,
  vote_count,
  release_date,
  budget,
  revenue,
}) {
  const { theme } = useContext(ColorModeContext);
  const usFormat = {
    style: "currency",
    currency: "USD",
  };


  const numberToUsMoney = new Intl.NumberFormat("en-US", usFormat);
  return (
    <section className={`general-info ${theme}`}>
      <MovieCast id={id} />
      <aside className={`general-info__aside  text aside-${theme}`}>
        <h3>Estadisticas</h3>
        <span>Lenguaje original: {original_language.toUpperCase()}</span>
        <span>Total votos: {vote_count}</span>
        <span>Fecha estreno: {release_date}</span>
        <span>Presupuesto: {numberToUsMoney.format(budget)}</span>
        <span>Ingresos generados: {numberToUsMoney.format(revenue)}</span>
      </aside>
    </section>
  );
}
