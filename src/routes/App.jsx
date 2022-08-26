import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Layout } from "../templates/Layout/Layout";

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </Layout>
    
    </BrowserRouter>
  )
}

export { App };
