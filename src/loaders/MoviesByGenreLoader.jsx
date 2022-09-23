import ContentLoader from "react-content-loader";
import { useWindowSize } from "../hooks/useWindowSize";

const MoviesByGenreLoader = () => {
  const { width } = useWindowSize();

  return (
    <div style={{ overflowX: "hidden", padding: "70px 0 30px 10px" }}>
      <ContentLoader
        speed={2}
        width={width}
        height={300}
        viewBox={`0 0 ${width} 360`}
        backgroundColor="#666"
        foregroundColor="#ecebeb"
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
