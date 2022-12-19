import { useContext } from "react";
import ContentLoader from "react-content-loader";
import { ColorModeContext } from "../context/ColorModeContext";
import { useWindowSize } from "../hooks/useWindowSize";
import { styles } from "./loaderColors";

const MoviesByGenreLoader = () => {
  const { width } = useWindowSize();
  const { theme } = useContext(ColorModeContext);

  return (
    <div style={{ overflowX: "hidden", padding: "70px 0 30px 10px" }}>
      <ContentLoader
        speed={2}
        width={width}
        height={300}
        viewBox={`0 0 ${width} 360`}
        backgroundColor={ theme === "light" ? styles.light.backgroundColor : styles.dark.backgroundColor }
        foregroundColor={ theme === "light" ? styles.light.foregroundColor : styles.dark.foregroundColor }
      >
        <rect x="28" y="5" rx="10" ry="10" width="200" height="300" />
        <rect x="328" y="5" rx="10" ry="10" width="200" height="300" />
        <rect x="628" y="5" rx="10" ry="10" width="200" height="300" />
        <rect x="928" y="5" rx="10" ry="10" width="200" height="300" />
        <rect x="1228" y="5" rx="10" ry="10" width="200" height="300" />
       
       
      </ContentLoader>
    </div>
  );
};

export { MoviesByGenreLoader };
