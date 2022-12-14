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

const RemoveConfirmedModal = () => {
  return (
    <motion.div
      className="removed-modal"
      key="remove-modal"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      Eliminado exitosamente
    </motion.div>
  );
};

export { RemoveConfirmedModal };
