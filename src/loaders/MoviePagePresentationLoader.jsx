import ContentLoader from "react-content-loader";
import { useWindowSize } from "../hooks/useWindowSize";

const MoviePagePresentationLoader = () => {
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
        <rect x="695" y="33" rx="10" ry="10" width="200" height="300" />
        <rect x="114" y="89" rx="0" ry="0" width="1" height="1" />
        <rect x="7" y="9" rx="0" ry="0" width="587" height="160" />
        <rect x="55" y="108" rx="0" ry="0" width="122" height="180" />
        <rect x="196" y="179" rx="0" ry="0" width="355" height="28" />
        <rect x="196" y="217" rx="0" ry="0" width="355" height="28" />
        <rect x="194" y="258" rx="0" ry="0" width="355" height="28" />
      </ContentLoader>
    </div>
  );
};

export { MoviePagePresentationLoader };
