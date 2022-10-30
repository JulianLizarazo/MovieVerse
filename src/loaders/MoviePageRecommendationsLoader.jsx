import ContentLoader from "react-content-loader";
import { useWindowSize } from "../hooks/useWindowSize";

const MoviePageRecommendationsLoader = () => {
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
            <rect x="37vw" y="20" rx="0" ry="0" width="261" height="32" />
            <rect x="37" y="101" rx="10" ry="10" width="134" height="213" />
            <rect x="237" y="102" rx="10" ry="10" width="134" height="213" />
            <rect x="437" y="101" rx="10" ry="10" width="134" height="213" />
            <rect x="637" y="101" rx="10" ry="10" width="134" height="213" />
            <rect x="837" y="102" rx="10" ry="10" width="134" height="213" />
            <rect x="1037" y="101" rx="10" ry="10" width="134" height="213" />
            <rect x="1237" y="101" rx="10" ry="10" width="134" height="213" />
            <rect x="1437" y="101" rx="10" ry="10" width="134" height="213" />
          </ContentLoader>
        </div>
      ) : (
        <div style={{ overflowX: "hidden", padding: "30px 0 30px 10px" }}>
          <ContentLoader
            speed={2}
            width={width}
            height={360}
            viewBox={`0 0 ${width} 360`}
            backgroundColor="#666"
            foregroundColor="#ecebeb"
          >
            <rect x="20vw" y="20" rx="0" ry="0" width="50vw" height="32" />
            <rect x="37" y="101" rx="10" ry="10" width="134" height="213" />
            <rect x="237" y="102" rx="10" ry="10" width="134" height="213" />
            <rect x="437" y="101" rx="10" ry="10" width="134" height="213" />
            <rect x="637" y="101" rx="10" ry="10" width="134" height="213" />
            <rect x="837" y="102" rx="10" ry="10" width="134" height="213" />
            <rect x="1037" y="101" rx="10" ry="10" width="134" height="213" />
            <rect x="1237" y="101" rx="10" ry="10" width="134" height="213" />
            <rect x="1437" y="101" rx="10" ry="10" width="134" height="213" />
          </ContentLoader>
        </div>
      )}
    </>
  );
};

export { MoviePageRecommendationsLoader };
