import "./SearchButton.scss";
import { motion } from "framer-motion";

const variants = {
  open: {
    height: "100px",
  },
  closed: {
    height: "0",
    opacity: 0,
  },
};

const transition = { type: "spring", duration: 1, stiffness: 33, delay: 0.1 };

const SearchButton = ({ display }) => {
  return (
    <motion.section className="search-section"
    initial={false}
    animate={!display ? "open" : "closed"}
    variants={variants}
    transition={transition}
    >
      <input placeholder="Pelicula o show de TV" />

      <button>Buscara</button>
    </motion.section>

  );
};

export { SearchButton };
