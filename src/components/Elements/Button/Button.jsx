import { motion } from "framer-motion";
import { Loader } from "../Loader";

export const Button = ({
  text,
  onClick,
  style,
  isLoading,
  disabled,
  className,
  ...otherProps
}) => {
  const variants = {
    // hidden: {
    //   scale: 0,
    // },
    // show: {
    //   scale: 1,
    //   transition: {
    //     duration: 0.5,
    //   },
    // },
    hidden: { scale: 0.5 },
    show: {
      scale: 1,
      transition: {
        duration: 1.5,
        type: "spring",
        stiffness: 80,
      },
    },
  };

  let backgroundColor = "black";
  let textColor = "white";

  if (disabled == true) {
    backgroundColor = "gray-200";
    textColor = "gray-500";
  }

  if (style == "ghost") {
    backgroundColor = "transparent";
    textColor = "gray-500";
  }

  const hover = disabled
    ? {}
    : {
        opacity: 1,
        scale: 1.2,
      };

  return (
    <motion.button
      className={`${className} px-3 py-2 rounded-md bg-${backgroundColor} hover:bg-black hover:text-white text-${textColor}`}
      whileHover={hover}
      initial="hidden"
      animate="show"
      variants={variants}
      whileTap={{ scale: 0.95 }}
      onClick={disabled ? null : onClick}
      disabled={isLoading || disabled}
      {...otherProps}
    >
      {isLoading ? (
        <div className="w-24">
          <Loader size="sm" />
        </div>
      ) : (
        text
      )}
    </motion.button>
  );
};
