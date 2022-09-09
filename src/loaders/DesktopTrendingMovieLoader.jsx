import React from "react"
import "./DesktopTrendingMovieLoader.scss";

const DesktopTrendingMovieLoader = () => (
    <div style={{overflowX: "hidden", width:"100%", height:"100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div className="spinner"></div>
    </div>
)

export { DesktopTrendingMovieLoader };