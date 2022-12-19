import { useContext } from "react";
import ContentLoader from "react-content-loader";
import { ColorModeContext } from "../context/ColorModeContext";
import { styles } from "./loaderColors";

const InfiniteScrollingMovieLoader = () => {
  const { theme } = useContext(ColorModeContext);

  return (
    <div style={{ overflowX: "hidden"}}>
      <ContentLoader
        speed={2}
        width={250}
        height={350}
        viewBox={`0 0 250 360`}
        backgroundColor={ theme === "light" ? styles.light.backgroundColor : styles.dark.backgroundColor }
        foregroundColor={ theme === "light" ? styles.light.foregroundColor : styles.dark.foregroundColor }
      >
     
     <rect x="0" y="4" rx="5" ry="5" width="200" height="300" />
       
      </ContentLoader>
    </div>
  );
};

export { InfiniteScrollingMovieLoader };