import { motion } from "framer-motion";

export const Button = ({ text, onClick, ...otherProps }) => {
  const variants = {
    hidden: {
      opacity: 0,
      scale: 1.05,
    },
    show: {
      opacity: 1,
    },
  };

  return (
    <motion.button
      className="px-3 py-2 rounded-md"
      whileHover={{
        opacity: 1,
        backgroundColor: "#111",
        color: "#FFF",
        scale: 1.05,
      }}
      variants={variants}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};
