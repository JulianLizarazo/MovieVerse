import ContentLoader from "react-content-loader";
import { useWindowSize } from "../hooks/useWindowSize";

const MoviePageProductionCompaniesLoader = () => {
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
            <rect x="37vw" y="22" rx="0" ry="0" width="241" height="28" />
            <rect x="30vw" y="132" rx="10" ry="10" width="178" height="103" />
            <rect x="55vw" y="132" rx="10" ry="10" width="178" height="103" />
          </ContentLoader>
        </div>
      ) : (
        <div style={{ overflowX: "hidden", padding: "30px 0 30px 10px" }}>
          <ContentLoader
            speed={2}
            width={width}
            height={600}
            viewBox={`0 0 ${width} 600`}
            backgroundColor="#666"
            foregroundColor="#ecebeb"
          >
            <rect x="30%" y="0" rx="0" ry="0" width="40vw" height="20" />

            <rect x="22" y="122" rx="10" ry="10" width="250px" height="150px" />
            <rect
              x="322"
              y="122"
              rx="10"
              ry="10"
              width="250px"
              height="150px"
            />
            <rect
              x="622"
              y="122"
              rx="10"
              ry="10"
              width="250px"
              height="150px"
            />
            <rect
              x="922"
              y="122"
              rx="10"
              ry="10"
              width="250px"
              height="150px"
            />
          </ContentLoader>
        </div>
      )}
    </>
  );
};

export { MoviePageProductionCompaniesLoader };
