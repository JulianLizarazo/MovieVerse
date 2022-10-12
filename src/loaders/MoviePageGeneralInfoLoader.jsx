import ContentLoader from "react-content-loader";
import { useWindowSize } from "../hooks/useWindowSize";

const MoviePageGeneralInfoLoader = () => {
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
        <rect x="355" y="31" rx="10" ry="10" width="200" height="313" />
        <rect x="82" y="39" rx="0" ry="0" width="145" height="27" />
        <rect x="29" y="117" rx="10" ry="10" width="105" height="176" />
        <rect x="168" y="116" rx="10" ry="10" width="105" height="176" />
      </ContentLoader>
    </div>
  );
};

export { MoviePageGeneralInfoLoader };
