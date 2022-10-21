import { useContext } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";
import "./MovieOverviewMobile.scss";

export default function MovieOverviewMobile({overview}){
    const { theme } = useContext(ColorModeContext);

    return(
        <section className={`movie-overview-mobile ${theme} `}>
            <p className="text">{overview}</p>
        </section>
    );
}

