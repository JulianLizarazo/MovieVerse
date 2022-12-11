import { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai"
import { FavouriteMovieListContext } from "../../context/FavouriteMovieListContext";


import "./AddToFavouritesButton.scss";


const AddToFavouritesButton = ({movie, whereIsTheButton}) => {

    const { addToFavouriteMoviesList } = useContext(FavouriteMovieListContext);
    
    const handleAddToFavouriteList = (idMovie) => () => {
        addToFavouriteMoviesList(idMovie);
    }

    switch(whereIsTheButton){
        case "trending-desktop":
            return <TrendingDesktopButton handleAddToFavouriteList={handleAddToFavouriteList} movie={movie}/>
        case "trending-mobile":
            return <TrendingMobileButton handleAddToFavouriteList={handleAddToFavouriteList} movie={movie}/>
    }

}

const TrendingDesktopButton = ({handleAddToFavouriteList, movie}) => {
    return(
        <button className="trending-desktop" onClick={handleAddToFavouriteList(movie)}>Boton de tendencia pa</button>
    )
}

const TrendingMobileButton = ({handleAddToFavouriteList, movie}) => {
    
    return(
        <AiOutlineHeart className="favourite" onClick={handleAddToFavouriteList(movie)}/>
    )
}

export { AddToFavouritesButton };