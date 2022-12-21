import "./ChangeColorModeButton.scss";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useContext } from "react";
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
  const { theme, changeThemeMode } = useContext(ColorModeContext);

  const handleChangeThemeMode = () => () => {
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
        animate={theme === "light" ? "left" : "right"}
        variants={variants}
      >
        <div className="text-button">
          {theme === "light" ? (
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
