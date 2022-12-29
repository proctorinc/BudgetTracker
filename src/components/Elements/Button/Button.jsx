import { motion } from "framer-motion";
import { Loader } from "../Loader";

export const Button = ({ text, onClick, style, isLoading, ...otherProps }) => {
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
        scale: 1.2,
      }}
      initial={{
        backgroundColor: style === "ghost" ? "" : "#111",
        color: style === "ghost" ? "#111" : "#FFF",
      }}
      variants={variants}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="w-24">
          <Loader size="sm" />
        </div>
      ) : (
        text
      )}
    </motion.button>
  );
};
