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
      <HeadlessMenu.Items className="absolute z-50 right-0 mt-1 w-56 origin-top-right divide-y divide-gray-300 rounded-md bg-gray-50 ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-600 shadow-lg">
        {children}
      </HeadlessMenu.Items>
    </HeadlessMenu>
  );
};
