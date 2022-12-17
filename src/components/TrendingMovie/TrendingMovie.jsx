import { AiFillStar } from "react-icons/ai";
import { useAddedAnimationConfirmation } from "../../hooks/useAddedAnimationConfirmation";
import { AddToFavouritesButton } from "../AddToFavouritesButton/AddToFavouritesButton";
import { NoticeSlideModal } from "../NoticeSlideModal/NoticeSlideModal";
import "./TrendingMovie.scss";

const TrendingMovie = ({ id, alt, poster, voteAverage, title }) => {
  const styles = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w200${poster})`,
  };

  const { confirmationToAdded, setConfirmationToAdded } = useAddedAnimationConfirmation();

  return (
    <article className="trending-movie" style={styles} aria-label={alt}>
      <AddToFavouritesButton
        whereIsTheButton={"trending-mobile"}
        movieId={id}
        moviePoster={poster}
        moviePosterAlt={alt}
        movieTitle={title}
        confirmationState={setConfirmationToAdded}
      />

      <div className="trending-movie__vote-average">
        <AiFillStar className="star-icon" />
        <span>{voteAverage} / 10</span>
      </div>

      {confirmationToAdded && <NoticeSlideModal text={"Pelicula agregada exitosamente"} top={"mobile"}/>}
    </article>
  );
};

export { TrendingMovie };
