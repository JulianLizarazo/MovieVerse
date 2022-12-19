
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
                <p>Encuentra información de peliculas que conoces</p>
            </article>
            <article className="mobile-presentation__info">
                <AiFillHeart/>
                <p>Añadelas a tu lista de favoritos</p>
            </article>
            <article className="mobile-presentation__info">
                <AiOutlineSearch/>
                <p>Descubre nuevas peliculas</p>
            </article>
            </div>
        </section>
    )
};

export { MobilePresentation };