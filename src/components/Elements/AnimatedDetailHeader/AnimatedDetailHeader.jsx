import { motion } from "framer-motion";

export const AnimatedDetailHeader = ({ title, subtitle }) => {
  return (
    <div className="p-3 text-center">
      <motion.h1
        className="text-7xl font-extrabold"
        initial={{
          x: -50,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          scale: 1,
        }}
      >
        {title}
      </motion.h1>
      <motion.h3
        className="text-5xl font-extralight"
        initial={{
          x: 50,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          scale: 1,
        }}
      >
        {subtitle}
      </motion.h3>
    </div>
  );
};
