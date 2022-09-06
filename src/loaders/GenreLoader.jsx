import ContentLoader from "react-content-loader";
import { useWindowSize } from "../hooks/useWindowSize";

const GenreLoader = () => {
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
          <rect x="6" y="2" rx="0" ry="0" width="100" height="22" />
      
          <rect x="16" y="50" rx="0" ry="0" width="120" height="60" />
          <rect x="166" y="50" rx="0" ry="0" width="120" height="60" />
          <rect x="316" y="50" rx="0" ry="0" width="120" height="60" />
          <rect x="466" y="50" rx="0" ry="0" width="120" height="60" />
          <rect x="616" y="50" rx="0" ry="0" width="120" height="60" />
          <rect x="766" y="50" rx="0" ry="0" width="120" height="60" />
          <rect x="916" y="50" rx="0" ry="0" width="120" height="60" />

          <rect x="16" y="150" rx="0" ry="0" width="120" height="60" />
          <rect x="166" y="150" rx="0" ry="0" width="120" height="60" />
          <rect x="316" y="150" rx="0" ry="0" width="120" height="60" />
          <rect x="466" y="150" rx="0" ry="0" width="120" height="60" />
          <rect x="616" y="150" rx="0" ry="0" width="120" height="60" />
          <rect x="766" y="150" rx="0" ry="0" width="120" height="60" />
          <rect x="916" y="150" rx="0" ry="0" width="120" height="60" />
      
      </ContentLoader>
    </div>
  );
};

export { GenreLoader };
