import { useContext } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";
import { motion } from "framer-motion";
import "./Genre.scss";

const animateProps = {
    scale: 1.3,
    textShadow: "0px 0px 8px rgb(255,255,255)",
  };

const Genre = ({id, name}) => {
    
    const { theme } = useContext(ColorModeContext);


    return(
        <motion.article className={`genre _${id} border-${theme}`} whileHover={animateProps}>
            {name}
        </motion.article>
    )
}

export {Genre}