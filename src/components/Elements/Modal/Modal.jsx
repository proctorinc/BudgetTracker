import { motion, AnimatePresence } from "framer-motion";
import { XCircle } from "phosphor-react";

export const Modal = ({ onClose, children }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="absolute top-0 left-0 flex items-center justify-center w-full h-screen pt-20 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          className="p-5 z-50 w-1/2 rounded-md shadow-xl bg-gray-50 text-center font-extralight"
          onClick={(event) => event.stopPropagation()}
        >
          <XCircle
            size={25}
            className="rounded-full float-right hover:text-gray-500"
            onClick={onClose}
          />
          <div className="p-2">{children}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
