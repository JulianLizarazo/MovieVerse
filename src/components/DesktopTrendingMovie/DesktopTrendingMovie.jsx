import "./DesktopTrendingMovie.scss";
import { AiFillStar } from "react-icons/ai";

const DesktopTrendingMovie = ({ id, title, overview, voteAverage, poster, alt }) => {
  return (
    <article className="desktop-trending-movie">
      <aside className="desktop-trending-movie__info">
        <h3>{title}</h3>
        <p>{overview}</p>
        
      </aside>
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${poster})`,
        }}
        className="desktop-trending-movie__principal"
        aria-label={alt}
      ></div>
      <aside className="desktop-trending-movie__popularity">
        <div>
            <AiFillStar/>
            <span>{voteAverage} / 10</span>
        </div>

        <button className="desktop-trending-movie__popularity-add-favourite">Add to Favourites</button>
        <button className="desktop-trending-movie__popularity-details">Details</button>
      </aside>
    </article>
  );
};

export { DesktopTrendingMovie };
