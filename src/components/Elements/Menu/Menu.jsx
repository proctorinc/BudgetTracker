import { Menu as HeadlessMenu } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

import useAuth from "@/features/auth/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ title, onClick }) => {
  return (
    <HeadlessMenu.Item
      className={({ active }) =>
        `relative cursor-default select-none py-2 pr-10 pl-10 border-gray-300 ${
          active ? "bg-gray-300 text-gray-900" : "text-gray-900"
        }`
      }
    >
      {({ active }) => (
        <a className={`${active && "bg-blue-500"}`} onClick={onClick}>
          {title}
        </a>
      )}
    </HeadlessMenu.Item>
  );
};

export const Menu = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

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
          <UserCircleIcon className="h-10 text-gray-800" />
        </motion.div>
      </HeadlessMenu.Button>
      <HeadlessMenu.Items>
        <div className="flex flex-col overflow-auto absolute right-5 mt-5 w-56 origin-top-right divide-y divide-gray-300 rounded-md bg-gray-200 text-gray-600 shadow-lg">
          <MenuItem title="Profile" onClick={() => navigate("/profile")} />
          <MenuItem title="Logout" onClick={logout} />
        </div>
      </HeadlessMenu.Items>
    </HeadlessMenu>
  );
};
