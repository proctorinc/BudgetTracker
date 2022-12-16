import { motion } from "framer-motion";

export const AnimatedList = ({ children, ...otherProps }) => {
  const variants = {
    show: {
      transition: { staggerChildren: 0.1, staggerDirection: 1 },
    },
  };

  return (
    <motion.ul
      className="flex flex-col gap-1"
      variants={variants}
      initial="hidden"
      animate="show"
      {...otherProps}
    >
      {children}
    </motion.ul>
  );
};
