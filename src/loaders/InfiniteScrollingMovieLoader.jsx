import ContentLoader from "react-content-loader";


const InfiniteScrollingMovieLoader = () => {
 

  return (
    <div style={{ overflowX: "hidden"}}>
      <ContentLoader
        speed={2}
        width={250}
        height={350}
        viewBox={`0 0 250 360`}
        backgroundColor="#666"
        foregroundColor="#ecebeb"
      >
     
     <rect x="0" y="4" rx="5" ry="5" width="200" height="300" />
       
      </ContentLoader>
    </div>
  );
};

export { InfiniteScrollingMovieLoader };