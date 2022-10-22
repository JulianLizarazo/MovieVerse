import ContentLoader from "react-content-loader";
import { useWindowSize } from "../hooks/useWindowSize";

const MoviePageGalleryImagesLoader = () => {
  const { width } = useWindowSize();

  return (
    <>
      {width > 1023 ? (
        <div style={{ overflowX: "hidden", padding: "30px 0 30px 10px" }}>
          <ContentLoader
            speed={2}
            width={width}
            height={360}
            viewBox={`0 0 ${width} 360`}
            backgroundColor="#666"
            foregroundColor="#ecebeb"
          >
            <rect x="38vw" y="20" rx="0" ry="0" width="250" height="32" />
            <rect x="25vw" y="89" rx="0" ry="0" width="50vw" height="25vh" />
            <rect
              x="10vw"
              y="152"
              rx="50"
              ry="50"
              width="100px"
              height="100px"
            />
            <rect
              x="80vw"
              y="159"
              rx="50"
              ry="50"
              width="100px"
              height="100px"
            />
          </ContentLoader>
        </div>
      ) : (
        <div style={{ overflowX: "hidden", padding: "30px 0 30px 10px" }}>
          <ContentLoader
            speed={2}
            width={width}
            height={500}
            viewBox={`0 0 ${width} 500`}
            backgroundColor="#666"
            foregroundColor="#ecebeb"
          >
           <rect x="30%" y="0" rx="0" ry="0" width="40vw" height="20" />
           <rect x="22" y="122" rx="10" ry="0" width="80vw" height="35vh" />
          </ContentLoader>
        </div>
      )}
    </>
  );
};

export { MoviePageGalleryImagesLoader };
