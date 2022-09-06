import { useContext } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";
import { AiFillGithub } from "react-icons/ai";
import "./Footer.scss";

const Footer = () => {
    const { theme } = useContext(ColorModeContext);
    return(
        <footer className={`footer ${theme}`}>
            <div className="text footer__container">
                <p>@2022 by Julian Pinilla <br/>All rights reserved</p>
                <div className="footer__container-credits">
                    <p>API Used:</p>
                    <a href="https://www.themoviedb.org" target="_blank" className="text">The Movie Database</a>
                </div>
                
                <a href="https://github.com/JulianLizarazo" target="_blank" className="footer__icon">
                    <AiFillGithub className="footer__icon-github text"/>
                    <span className="text">Github</span>
                </a>
            </div>
        </footer>
    );
};

export { Footer };