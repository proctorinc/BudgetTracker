import { motion, AnimatePresence } from "framer-motion";

export const Loader = () => {
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

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="show"
        variants={variants}
        exit="delete"
        className="flex justify-center items-center w-full"
      >
        <div className="animate-spin border-4 border-gray-800 border-t-white rounded-full animate-full p-2 h-8 w-8"></div>
      </motion.div>
    </AnimatePresence>
  );
};
