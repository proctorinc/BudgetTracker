import { motion, AnimatePresence } from "framer-motion";

export const Loader = ({ size }) => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
    delete: {
      opacity: 1,
      transition: { ease: "easeOut", duration: 2 },
    },
  };

  const getSize = () => {
    let width = "10";
    if (size === "sm") {
      width = "6";
    } else if (size === "xl") {
      width = "16";
    }
    return width;
  };

  const width = getSize();

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="show"
        variants={variants}
        exit="delete"
        className="flex justify-center items-center w-full"
      >
        <div
          className={`animate-spin border-4 border-gray-800 border-t-gray-100 rounded-full animate-full p-2 h-${width} w-${width}`}
        ></div>
      </motion.div>
    </AnimatePresence>
  );
};
