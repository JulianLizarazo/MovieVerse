import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ColorModeContext } from "../context/ColorModeContext";
import { ParallaxProvider } from "react-scroll-parallax";
import { useChangeColorMode } from "../hooks/useChangeColorMode";
import { Home } from "../pages/Home/Home";
import { Layout } from "../templates/Layout/Layout";
import { GenrePage } from "../pages/GenrePage/GenrePage";
import { Movie } from "../pages/Movie/Movie";
import { MovieSearchResults } from "../pages/MovieSearchResults/MovieSearchResults";
import { useFavouriteMovies } from "../hooks/useFavouriteMovies";
import { FavouriteMovieListContext } from "../context/FavouriteMovieListContext";

function App() {
  const themeInitialState = useChangeColorMode();
  const favouriteMovieListInitialState = useFavouriteMovies();
  return (
    <ColorModeContext.Provider value={themeInitialState}>
      <FavouriteMovieListContext.Provider
        value={favouriteMovieListInitialState}
      >
        <ParallaxProvider>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path=":id" element={<GenrePage />} />
                <Route exact path="/movies/:idMovie" element={<Movie />} />
                <Route
                  exact
                  path="/search/:id"
                  element={<MovieSearchResults />}
                />
              </Routes>
            </Layout>
          </BrowserRouter>
        </ParallaxProvider>
      </FavouriteMovieListContext.Provider>
    </ColorModeContext.Provider>
  );
}

export { App };
