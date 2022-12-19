import { useContext } from "react";
import ContentLoader from "react-content-loader";
import { ColorModeContext } from "../context/ColorModeContext";
import { useWindowSize } from "../hooks/useWindowSize";
import { styles } from "./loaderColors";

const MoviePageGeneralInfoLoader = () => {
  const { width } = useWindowSize();
  const { theme } = useContext(ColorModeContext)

  return (
    <>
      {width > 1023 ? (
        <div style={{ overflowX: "hidden" }}>
          <ContentLoader
            speed={2}
            width={width}
            height={400}
            viewBox={`0 0 ${width} 400`}
            backgroundColor={ theme === "light" ? styles.light.backgroundColor : styles.dark.backgroundColor }
        foregroundColor={ theme === "light" ? styles.light.foregroundColor : styles.dark.foregroundColor }
          >
            <rect x="70vw" y="31" rx="10" ry="10" width="200" height="80%" />
            <rect x="30vw" y="39" rx="0" ry="0" width="145" height="27" />
            <rect x="20vw" y="117" rx="10" ry="10" width="140" height="176" />
            <rect x="40vw" y="116" rx="10" ry="10" width="140" height="176" />
          </ContentLoader>
        </div>
      ) : (
        <div style={{ overflowX: "hidden" }}>
          <ContentLoader
            speed={2}
            width={width}
            height={1000}
            viewBox={`0 0 ${width} 1000`}
            backgroundColor={ theme === "light" ? styles.light.backgroundColor : styles.dark.backgroundColor }
        foregroundColor={ theme === "light" ? styles.light.foregroundColor : styles.dark.foregroundColor }
          >
            <rect x="30%" y="0" rx="0" ry="0" width="40vw" height="20" />

            <rect x="22" y="122" rx="10" ry="10" width="136px" height="250px" />
            <rect
              x="222"
              y="122"
              rx="10"
              ry="10"
              width="136px"
              height="250px"
            />
            <rect
              x="422"
              y="122"
              rx="10"
              ry="10"
              width="136px"
              height="250px"
            />
            <rect
              x="622"
              y="122"
              rx="10"
              ry="10"
              width="136px"
              height="250px"
            />
            <rect
              x="822"
              y="122"
              rx="10"
              ry="10"
              width="136px"
              height="250px"
            />

            <rect x="22%" y="522" rx="10" ry="10" width="50vw" height="450px" />
          </ContentLoader>
        </div>
      )}
    </>
  );
};

export { MoviePageGeneralInfoLoader };
