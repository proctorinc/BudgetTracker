import { Menu as HeadlessMenu } from "@headlessui/react";
import { motion } from "framer-motion";

export const Menu = ({ icon, children }) => {
  return (
    <HeadlessMenu>
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
      <HeadlessMenu.Items>
        <div className="z-50 flex flex-col overflow-auto absolute right-5 mt-6 origin-top-right divide-y divide-gray-300 rounded-md bg-gray-200 text-gray-600 shadow-lg">
          {children}
        </div>
      </HeadlessMenu.Items>
    </HeadlessMenu>
  );
};
