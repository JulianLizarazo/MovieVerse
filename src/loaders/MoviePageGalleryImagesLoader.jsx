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
        <rect x="695" y="33" rx="10" ry="10" width="200" height="300" />
        <rect x="114" y="89" rx="0" ry="0" width="1" height="1" />
        <rect x="163" y="20" rx="0" ry="0" width="261" height="32" />
        <rect x="119" y="89" rx="0" ry="0" width="367" height="239" />
        <rect x="12" y="152" rx="50" ry="50" width="61" height="61" />
        <rect x="524" y="159" rx="50" ry="50" width="61" height="61" />
      </ContentLoader>
    </div>
  );
};

export { MoviePageGalleryImagesLoader };
