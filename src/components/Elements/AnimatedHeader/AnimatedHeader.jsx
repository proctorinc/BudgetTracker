import { motion } from "framer-motion";

export const AnimatedHeader = ({ title }) => {
  const variants = {
    hidden: {
      x: -50,
    },
    show: {
      x: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 80,
      },
    },
  };

  return (
    <motion.h1
      className="text-6xl font-bold py-5"
      variants={variants}
      initial="hidden"
      animate="show"
    >
      {title}
    </motion.h1>
  );
};
