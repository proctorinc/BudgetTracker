import { Menu as HeadlessMenu } from "@headlessui/react";
import { motion } from "framer-motion";

export const Menu = ({ icon, children }) => {
  return (
    <HeadlessMenu as="div" className="relative inline-block text-left">
      <HeadlessMenu.Button>
        <motion.div
          whileHover={{
            opacity: 1,
            scale: 1.2,
          }}
          whileTap={{ scale: 0.95 }}
        >
          {icon}
        </motion.div>
      </HeadlessMenu.Button>
      <HeadlessMenu.Items className="absolute z-50 right-0 mt-1 w-56 origin-top-right">
        <motion.div
          className=" divide-y divide-gray-200 rounded-md bg-gray-50 ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-600 shadow-lg"
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.2,
              staggerChildren: 0.1,
              staggerDirection: 1,
            },
          }}
        >
          {children}
        </motion.div>
      </HeadlessMenu.Items>
    </HeadlessMenu>
  );
};
