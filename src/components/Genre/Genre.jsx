import { useContext } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Genre.scss";
import { useGenres } from "../../hooks/useGenres";

const animateProps = {
  scale: 1.3,
  textShadow: "0px 0px 8px rgb(255,255,255)",
};

const Genre = ({ id, name }) => {
  const { theme } = useContext(ColorModeContext);

  return (
    <Link to={`/${id}`}className="genre-link">
      <motion.article
        className={`genre _${id} border-${theme}`}
        whileHover={animateProps}
      >
        {name}
      </motion.article>
    </Link>
  );
};

export { Genre };
