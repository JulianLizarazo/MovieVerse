import ContentLoader from "react-content-loader";
import { useWindowSize } from "../hooks/useWindowSize";

const MoviePagePresentationLoader = () => {
  const { width } = useWindowSize();

  return (
    <div style={{ overflowX: "hidden" }}>
      <ContentLoader
        speed={2}
        width={width}
        height={700}
        viewBox={`0 0 ${width} 700`}
        backgroundColor="#666"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="0" ry="0" width="100%" height="50vh" />
        <rect x="10vw" y="30vh" rx="10" ry="10" width="250px" height="350px" />
        <rect x="40vw" y="52vh" rx="0" ry="0" width="40%" height="28" />
        <rect x="40vw" y="58vh" rx="0" ry="0" width="40%" height="28" />
        <rect x="40vw" y="64vh" rx="0" ry="0" width="40%" height="28" />
      </ContentLoader>
    </div>
  );
};

export { MoviePagePresentationLoader };
