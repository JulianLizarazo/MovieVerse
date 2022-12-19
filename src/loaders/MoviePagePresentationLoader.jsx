import { useContext } from "react";
import ContentLoader from "react-content-loader";
import { ColorModeContext } from "../context/ColorModeContext";
import { useWindowSize } from "../hooks/useWindowSize";
import { styles } from "./loaderColors";

const MoviePagePresentationLoader = () => {
  const { width } = useWindowSize();
  const { theme } = useContext(ColorModeContext);

  return (
    <>
      {width > 1023 ? (
        <div style={{ overflowX: "hidden" }}>
          <ContentLoader
            speed={2}
            width={width}
            height={700}
            viewBox={`0 0 ${width} 700`}
            backgroundColor={ theme === "light" ? styles.light.backgroundColor : styles.dark.backgroundColor }
        foregroundColor={ theme === "light" ? styles.light.foregroundColor : styles.dark.foregroundColor }
          >
            <>
              <rect x="0" y="0" rx="0" ry="0" width="100%" height="50vh" />
              <rect
                x="10vw"
                y="30vh"
                rx="10"
                ry="10"
                width="250px"
                height="350px"
              />
              <rect x="40vw" y="52vh" rx="0" ry="0" width="40%" height="28" />
              <rect x="40vw" y="58vh" rx="0" ry="0" width="40%" height="28" />
              <rect x="40vw" y="64vh" rx="0" ry="0" width="40%" height="28" />
            </>
          </ContentLoader>
        </div>
      ) : (
        <div style={{ overflowX: "hidden" }}>
          <ContentLoader
            speed={2}
            width={width}
            height={700}
            viewBox={`0 0 ${width} 700`}
            backgroundColor={ theme === "light" ? styles.light.backgroundColor : styles.dark.backgroundColor }
        foregroundColor={ theme === "light" ? styles.light.foregroundColor : styles.dark.foregroundColor }
          >
            {width > 426 ? (
              <>
                <rect x="0" y="0" rx="0" ry="0" width="100%" height="40vh" />

                <rect
                  x="35%"
                  y="18vh"
                  rx="0"
                  ry="0"
                  width="200px"
                  height="300px"
                />

                <rect
                  x="20vw"
                  y="70vh"
                  rx="0"
                  ry="0"
                  width="60vw"
                  height="30px"
                />
                <rect x="15vw" y="80vh" rx="0" ry="0" width="92" height="36" />
                <rect x="45vw" y="80vh" rx="0" ry="0" width="92" height="36" />
                <rect x="75vw" y="80vh" rx="0" ry="0" width="92" height="36" />

                <rect
                  x="20vw"
                  y="90vh"
                  rx="0"
                  ry="0"
                  width="60vw"
                  height="30px"
                />

                <rect
                  x="20vw"
                  y="95vh"
                  rx="0"
                  ry="0"
                  width="60vw"
                  height="30px"
                />
              </>
            ) : (
              <>
                <rect x="0" y="0" rx="0" ry="0" width="100%" height="40vh" />

                <rect
                  x="22%"
                  y="18vh"
                  rx="0"
                  ry="0"
                  width="200px"
                  height="300px"
                />

                <rect
                  x="20vw"
                  y="70vh"
                  rx="0"
                  ry="0"
                  width="60vw"
                  height="30px"
                />
                <rect x="5vw" y="80vh" rx="0" ry="0" width="92" height="36" />
                <rect x="35vw" y="80vh" rx="0" ry="0" width="92" height="36" />
                <rect x="65vw" y="80vh" rx="0" ry="0" width="92" height="36" />

                <rect
                  x="20vw"
                  y="95vh"
                  rx="0"
                  ry="0"
                  width="60vw"
                  height="30px"
                />

                <rect
                  x="20vw"
                  y="105vh"
                  rx="0"
                  ry="0"
                  width="60vw"
                  height="30px"
                />
              </>
            )}
          </ContentLoader>
        </div>
      )}
    </>
  );
};

export { MoviePagePresentationLoader };
