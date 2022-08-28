import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ColorModeContext } from "../context/ColorModeContext";
import { useChangeColorMode } from "../hooks/useChangeColorMode";
import { Home } from "../pages/Home/Home";
import { Layout } from "../templates/Layout/Layout";

function App() {
  const themeInitialState = useChangeColorMode();
  return (
    <ColorModeContext.Provider value={themeInitialState}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </Layout>
   
    </BrowserRouter>
    
    </ColorModeContext.Provider>
  )
}

export { App };
