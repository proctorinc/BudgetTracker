import { motion } from "framer-motion";

export const AnimatedCard = ({ children, ...otherProps }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 80,
      },
    },
  };

  return (
    <motion.li
      className="flex bg-gray-50 border-2 border-gray-300 px-4 py-2 rounded-md hover:bg-gray-200 text-gray-700"
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...otherProps}
    >
      {children}
    </motion.li>
  );
};
