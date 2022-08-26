import "./ChangeColorModeButton.scss";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  left: {
    transform: "translateX(0%)",
  },

  right: {
    transform: "translateX(100%)",
  },
};

const ChangeColorModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  const changeThemeButton = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="change-container" onClick={changeThemeButton}>
      <motion.div
        className="change-container__circle"
        initial={false}
        animate={!darkMode ? "left" : "right"}
        variants={variants}
      >
        {!darkMode ? (
          <BsFillSunFill className="change-container__circle-icon" />
        ) : (
          <BsFillMoonFill className="change-container__circle-icon" />
        )}
      </motion.div>
    </div>
  );
};

export { ChangeColorModeButton };
