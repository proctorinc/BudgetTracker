import { motion, AnimateSharedLayout } from "framer-motion";
import { AnimatedCard } from "../AnimatedCard";

export const AnimatedList = ({ children, ...otherProps }) => {
  const variants = {
    show: {
      transition: { staggerChildren: 0.1, staggerDirection: 1 },
    },
  };

  const noChildren = <AnimatedCard>None</AnimatedCard>;

  return (
    <motion.ul
      className="flex flex-col gap-1"
      variants={variants}
      initial="hidden"
      animate="show"
      {...otherProps}
    >
      {children?.length > 0 ? children : noChildren}
    </motion.ul>
  );
};
