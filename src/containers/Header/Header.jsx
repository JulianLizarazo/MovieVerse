import { HamburguerMenu } from "../../components/HamburguerMenu/HamburguerMenu";
import "./Header.scss";

const Header = () => {
    return(
        <header className="header">
            <HamburguerMenu/>
        </header>
    );
}

export { Header }