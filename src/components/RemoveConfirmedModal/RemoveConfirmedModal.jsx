import "./RemoveConfirmedModal.scss";
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

const RemoveConfirmedModal = ({text}) => {
  return (
    <motion.div
      className="removed-modal"
      key="remove-modal"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {text}
    </motion.div>
  );
};

export { RemoveConfirmedModal };
