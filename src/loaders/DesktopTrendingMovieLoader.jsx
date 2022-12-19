import React from "react";
import { useContext } from "react";
import { ColorModeContext } from "../context/ColorModeContext";
import "./DesktopTrendingMovieLoader.scss";

const DesktopTrendingMovieLoader = () => {
  const { theme } = useContext(ColorModeContext);

  return (
    <div
      style={{
        overflowX: "hidden",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={`spinner spinner-${theme}`}></div>
    </div>
  );
};

export { DesktopTrendingMovieLoader };
