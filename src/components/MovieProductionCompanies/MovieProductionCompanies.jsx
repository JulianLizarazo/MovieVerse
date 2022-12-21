import { useContext } from "react";
import { IMAGES_URL } from "../../api/images";
import { ColorModeContext } from "../../context/ColorModeContext";
import "./MovieProductionCompanies.scss";

export default function MovieProductionCompanies({ productionCompanies }){
  const { theme } = useContext(ColorModeContext);

  return (
    <section className={`movie-production-companies ${theme} `}>
      <h2 className="movie-production-companies__title text">
        Compañías Productoras
      </h2>
      <ul className={`movie-production-companies__ul text scroll-${theme}`}>
        {productionCompanies?.map((productionCompanie) => (
          <li
            className={`movie-production-companies__ul--li productions-${theme}`}
            key={productionCompanie.id}
          >
            {productionCompanie.logo_path ? (
              <img
                src={`${IMAGES_URL}w200${productionCompanie.logo_path}`}
                width="200px"
                height="100px"
                loading="lazy"
                alt={`Logo ${productionCompanie.logo_path}`}
              />
            ) : (
              <p className={`production-companie-text-${theme}`}>
                {productionCompanie.name} <br />
                (Image not Found)
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};


