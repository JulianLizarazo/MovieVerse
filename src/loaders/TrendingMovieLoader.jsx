import { useContext } from "react";
import ContentLoader from "react-content-loader";
import { ColorModeContext } from "../context/ColorModeContext";
import { useWindowSize } from "../hooks/useWindowSize";
import { styles } from "./loaderColors";

const TrendingMovieLoader = () => {
    const { width } = useWindowSize();
    const { theme } = useContext(ColorModeContext);
   
  return (
    <div style={{overflowX:"hidden", padding: "70px 0 30px 10px"}}>
      <ContentLoader
        speed={2}
        width={width}
        height={360}
        viewBox={`0 0 ${width} 360`}
        backgroundColor={ theme === "light" ? styles.light.backgroundColor : styles.dark.backgroundColor }
        foregroundColor={ theme === "light" ? styles.light.foregroundColor : styles.dark.foregroundColor }
       
      >
        <rect x="10" y="60" rx="10" ry="10" width="200" height="300" />
        <rect x="240" y="60" rx="10" ry="10" width="200" height="300" />
        <rect x="470" y="60" rx="10" ry="10" width="200" height="300" />
        <rect x="10" y="0" rx="0" ry="0" width="185" height="21" />
        <rect x="700" y="60" rx="10" ry="10" width="200" height="300" />
        <rect x="930" y="60" rx="10" ry="10" width="200" height="300" />
      </ContentLoader>
    </div>
  );
};

export { TrendingMovieLoader };
