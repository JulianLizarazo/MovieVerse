
import { useContext } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";
import "./MobilePresentation.scss";
import { MdMovieFilter } from "react-icons/md";
import { AiFillHeart, AiOutlineSearch } from "react-icons/ai";


const MobilePresentation = () => {
    const { theme } = useContext(ColorModeContext);
    return(
        <section className={`mobile-presentation ${theme}`}>
            <div className="text">

            <h2 >Bienvenido a Movieverse</h2>

            <article className="mobile-presentation__info">
                <MdMovieFilter/>
                <p>Sjajkasjkaskj sjaskjasjkas jkas</p>
            </article>
            <article className="mobile-presentation__info">
                <AiFillHeart/>
                <p>Add to your favourites list</p>
            </article>
            <article className="mobile-presentation__info">
                <AiOutlineSearch/>
                <p>Find new movies</p>
            </article>
            </div>
        </section>
    )
};

export { MobilePresentation };