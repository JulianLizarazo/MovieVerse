import "./ChangeColorModeButton.scss";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";

const variants = {
  left: {
    transform: "translateX(-5%)",
  },

  right: {
    transform: "translateX(100%)",
  },
};

const ChangeColorModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { theme, changeThemeMode } = useContext(ColorModeContext);

  const changeThemeButton = () => {
    setDarkMode(!darkMode);
  };

  const handleChangeThemeMode = () => () => {
    changeThemeButton();
    changeThemeMode();
  };

  return (
    <div
      className={`change-container ${theme}-button`}
      onClick={handleChangeThemeMode()}
    >
      <motion.div
        className={`change-container__circle ${theme}-button`}
        initial={false}
        animate={!darkMode ? "left" : "right"}
        variants={variants}
      >
        <div className="text-button">
          {!darkMode ? (
            <BsFillSunFill className="change-container__circle-icon" />
          ) : (
            <BsFillMoonFill className="change-container__circle-icon" />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export { ChangeColorModeButton };
