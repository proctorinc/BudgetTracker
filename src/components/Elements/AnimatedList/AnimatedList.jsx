import { motion, AnimateSharedLayout } from "framer-motion";
import { AnimatedCard } from "../AnimatedCard";
import { Loader } from "../Loader";

export const AnimatedList = ({ children, isLoading, ...otherProps }) => {
  const variants = {
    show: {
      transition: { staggerChildren: 0.1, staggerDirection: 1 },
    },
  };

  const noChildren = <AnimatedCard>None</AnimatedCard>;

  if (isLoading) {
    return <Loader />;
  }

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
