import ContentLoader from "react-content-loader";
import { useWindowSize } from "../hooks/useWindowSize";

const MoviePageGalleryImagesLoader = () => {
  const { width } = useWindowSize();

  return (
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
        <rect x="10vw" y="152" rx="50" ry="50" width="100px" height="100px" />
        <rect x="80vw" y="159" rx="50" ry="50" width="100px" height="100px" />
      </ContentLoader>
    </div>
  );
};

export { MoviePageGalleryImagesLoader };
