import { useContext } from "react";
import { GiBrokenBone } from "react-icons/gi";
import { ColorModeContext } from "../../context/ColorModeContext";
import "./NotFound.scss";

const NotFound = () => {
    const { theme } = useContext(ColorModeContext);
  return(
    <main className={`not-found ${theme}`}>
        <GiBrokenBone className={`icon-theme-${theme}`}/>
        <p className="text">Algo salió mal.... Recarga la web o vuelve al inicio</p>
    </main>
  )
};

export { NotFound };