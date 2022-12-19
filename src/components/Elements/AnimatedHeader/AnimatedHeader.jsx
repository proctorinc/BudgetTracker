import { motion } from "framer-motion";

export const AnimatedHeader = ({ title, subtitle }) => {
  const titleVariants = {
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

  const subtitleVariants = {
    hidden: {
      x: -100,
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
    <div className="flex flex-col py-5 gap-2">
      <motion.h1
        className="text-6xl font-bold"
        variants={titleVariants}
        initial="hidden"
        animate="show"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.h3
          variants={subtitleVariants}
          initial="hidden"
          animate="show"
          className="text-5xl font-extralight"
        >
          {subtitle}
        </motion.h3>
      )}
    </div>
  );
};
