import { useNavigate } from "react-router-dom";
import { Menu as HeadlessMenu } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

import useAuth from "@/features/auth/hooks/useAuth";

import MenuItem from "./MenuItem";

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
        <div className="flex flex-col overflow-auto absolute right-5 mt-6 w-56 origin-top-right divide-y divide-gray-300 rounded-md bg-gray-200 text-gray-600 shadow-lg">
          <MenuItem title="Profile" onClick={() => navigate("/profile")} />
          <MenuItem title="Logout" onClick={logout} />
        </div>
      </HeadlessMenu.Items>
    </HeadlessMenu>
  );
};
