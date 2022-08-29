import { Presentation } from "../../components/Presentation/Presentation";
import { TrendingMovies } from "../../containers/TrendingMovies/TrendingMovies";


const Home = () => {
    return(
        <main className="home">
            <Presentation/>
            <TrendingMovies/>
        </main>
    );
}

export { Home }