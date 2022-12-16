import "./NoticeSlideModal.scss";
import { motion } from "framer-motion";

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

const NoticeSlideModal = ({text, top, textColor, backgroundColor, borderColor}) => {
  return (
    <motion.div
      className="removed-modal"
      key="remove-modal"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={
        {
          top: top,
          color: textColor,
          backgroundColor: backgroundColor,
          border: `1px solid ${borderColor}`,
        }
      }
    >
      {text}
    </motion.div>
  );
};

export { NoticeSlideModal };
