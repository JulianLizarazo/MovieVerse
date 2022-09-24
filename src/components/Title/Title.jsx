import { useContext } from "react";
import { Link } from "react-router-dom";
import { ColorModeContext } from "../../context/ColorModeContext";
import "./Title.scss";

const Title = () => {

    const { theme } = useContext(ColorModeContext);
  return (
    <Link to="/" className={`link-title ${theme}`}>
      <h1 className="title text">MovieVerse</h1>
    </Link>
  );
};

export { Title };
