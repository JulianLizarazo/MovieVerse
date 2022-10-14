import ContentLoader from "react-content-loader";
import { useWindowSize } from "../hooks/useWindowSize";

const MoviePageGeneralInfoLoader = () => {
  const { width } = useWindowSize();

  return (
    <div style={{ overflowX: "hidden",  }}>
      <ContentLoader
        speed={2}
        width={width}
        height={400}
        viewBox={`0 0 ${width} 400`}
        backgroundColor="#666"
        foregroundColor="#ecebeb"
      >

        <rect x="70vw" y="31" rx="10" ry="10" width="200" height="80%" />
        <rect x="30vw" y="39" rx="0" ry="0" width="145" height="27" />
        <rect x="20vw" y="117" rx="10" ry="10" width="140" height="176" />
        <rect x="40vw" y="116" rx="10" ry="10" width="140" height="176" />
      </ContentLoader>
    </div>
  );
};

export { MoviePageGeneralInfoLoader };
