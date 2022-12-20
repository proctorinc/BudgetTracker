import { Reorder } from "framer-motion";

export const DraggableList = ({ children, ...otherProps }) => {
  const variants = {
    show: {
      transition: { staggerChildren: 0.1, staggerDirection: 1 },
    },
  };

  return (
    <Reorder.Group
      values={children}
      className="flex flex-col gap-1"
      variants={variants}
      initial="hidden"
      animate="show"
      {...otherProps}
    >
      {children}
    </Reorder.Group>
  );
};
