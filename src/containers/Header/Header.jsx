import { ChangeColorModeButton } from "../../components/ChangeColorModeButton/ChangeColorModeButton";
import { HamburguerMenu } from "../../components/HamburguerMenu/HamburguerMenu";
import { SearchButton } from "../../components/SearchButton/SearchButton";
import { Title } from "../../components/Title/Title";
import "./Header.scss";

const Header = () => {
    return(
        <header className="header">
            <Title/>
            <SearchButton/>
            <ChangeColorModeButton/>
            <HamburguerMenu/>
        </header>
    );
}

export { Header }