import { Presentation } from "../../components/Presentation/Presentation";
import { LazyTrendingMovie } from "../../containers/TrendingMovies/LazyTrendingMovies";


const Home = () => {
    return(
        <main className="home">
            <Presentation/>
            <div style={{height: "1000px"}}></div>
            <LazyTrendingMovie/>
        </main>
    );
}

export { Home }