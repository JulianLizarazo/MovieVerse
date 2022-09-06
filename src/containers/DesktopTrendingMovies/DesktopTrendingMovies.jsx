import { useTrendingMovies } from "../../hooks/useTrendingMovies";
import "./DesktopTrendingMovies.scss";

const DesktopTrendingMovies = () => {

    const { trendingMovies } = useTrendingMovies();

    return(
        <section className="desktop-trending-movies">
            <div className="desktop-trending-movies__carousel"></div>
            <div className="desktop-trending-movies__panel"></div>
        </section>
    );
}

export { DesktopTrendingMovies }