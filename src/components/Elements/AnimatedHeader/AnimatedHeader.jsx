import { motion } from "framer-motion";

export const AnimatedHeader = ({ title, subtitle }) => {
  const titleVariants = {
    hidden: {
      x: -40,
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
      x: -60,
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
    <div className="flex flex-col pt-0 sm:pt-5 pb-5 gap-2">
      <div className="flex">
        <motion.h1
          className="text-6xl font-bold"
          variants={titleVariants}
          initial="hidden"
          animate="show"
        >
          {title}
        </motion.h1>
      </div>
      {subtitle && (
        <motion.h3
          variants={subtitleVariants}
          initial="hidden"
          animate="show"
          className="text-3xl sm:text-4xl font-extralight"
        >
          {subtitle}
        </motion.h3>
      )}
    </div>
  );
};
