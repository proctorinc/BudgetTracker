import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

export const Tooltip = ({ content, className, children }) => {
  const [showTooltip, setShowToolTip] = useState(false);

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div
      className={className}
      onMouseEnter={() => setShowToolTip(true)}
      onMouseLeave={() => {
        setTimeout(() => {
          setShowToolTip(false);
        }, 500);
      }}
    >
      {children}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            key="tooltip"
            role="tooltip"
            className="flex flex-col p-3 absolute max-h-64 my-1 overflow-auto rounded-md bg-gray-200 py-1 text-base shadow-lg border border-gray-300 focus:outline-none sm:text-sm z-40 w-fit font-light text-gray-500"
            initial="hidden"
            animate="show"
            exit="exit"
            variants={variants}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
