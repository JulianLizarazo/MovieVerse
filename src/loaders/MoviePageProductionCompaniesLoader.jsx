import ContentLoader from "react-content-loader";
import { useWindowSize } from "../hooks/useWindowSize";

const MoviePageProductionCompaniesLoader = () => {
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
        <rect x="172" y="22" rx="0" ry="0" width="241" height="28" />
        <rect x="81" y="132" rx="10" ry="10" width="178" height="103" />
        <rect x="333" y="133" rx="10" ry="10" width="178" height="103" />
      </ContentLoader>
    </div>
  );
};

export { MoviePageProductionCompaniesLoader };
