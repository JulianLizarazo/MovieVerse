import "./NoticeSlideModal.scss";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";

const variants = {
    hidden: {
        x: "100%",
      },
    
      visible: {
        x: "-20%",
      },
    
      exit: {
        x: "150%",
      },
};

const NoticeSlideModal = ({text, top}) => {
  const { theme } = useContext(ColorModeContext);
  return (
    <motion.div
      className={`removed-modal removed-modal-${theme}`}
      key="remove-modal"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={
        {
          top: top === "mobile" ? "600px" : "80px",
        }
      }
    >
      {text}
    </motion.div>
  );
};

export { NoticeSlideModal };
