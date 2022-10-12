import { useContext } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";
import "./MovieOverview.scss";



export default function MovieOverview({overview}){
    const { theme } = useContext(ColorModeContext);

    return(
        <section className={`movie-overview ${theme}`}>
            <p className="movie-overview__text text">
            {overview}
            </p>
        </section>
    );
};

