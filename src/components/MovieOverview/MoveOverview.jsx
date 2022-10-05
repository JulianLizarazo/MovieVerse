import { useContext } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";
import "./MovieOverview.scss";



const MovieOverview = ({overview}) => {
    const { theme } = useContext(ColorModeContext);

    return(
        <section className={`movie-overview ${theme}`}>
            <p className="movie-overview__text text">
            {overview}
            </p>
        </section>
    );
};

export { MovieOverview }; 