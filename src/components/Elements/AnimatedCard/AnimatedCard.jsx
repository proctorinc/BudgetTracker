import { motion, AnimatePresence } from "framer-motion";

export const AnimatedCard = ({ children, ...otherProps }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 50,
      },
    },
    delete: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 80,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.li
        className="flex items-center bg-gray-50 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-200 hover:shadow-md hover:border-gray-300 text-gray-700 w-full"
        variants={variants}
        whileHover={{ scale: 1.05, transition: { duration: 0.25 } }}
        whileTap={{ scale: 0.95 }}
        delete="delete"
        {...otherProps}
      >
        {children}
      </motion.li>
    </AnimatePresence>
  );
};
