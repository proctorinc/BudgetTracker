import { useLocation, useNavigate } from "react-router-dom";
import { CurrencyDollarIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import {
  List,
  Bank,
  Receipt,
  SignOut,
  PresentationChart,
  Calculator,
  Coins,
  UserCircle,
} from "phosphor-react";
import { motion } from "framer-motion";

import { Button } from "@/components/Elements/Button";
import useAuth from "@/features/auth/hooks/useAuth";
import { getCurrentMonth, getCurrentYear } from "@/utils";

import { Menu } from "../Elements/Menu";
import MenuItem from "../Elements/Menu/MenuItem";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const currentMonth = getCurrentMonth();
  const currentYear = getCurrentYear();

  return (
    <nav className="flex justify-center w-full bg-gray-100 border-b border-gray-300">
      <div className="flex w-full items-center gap-1 px-3 h-16 max-w-3xl">
        <motion.button
          className="flex"
          onClick={() => navigate("/")}
          whileHover={{
            opacity: 1,
            scale: 1.2,
          }}
          whileTap={{ scale: 0.95 }}
        >
          <CurrencyDollarIcon className="h-8 text-gray-800" />
          <h3 className="text-2xl font-extrabold text-gray-800">Dink</h3>
        </motion.button>
        <div className="hidden sm:flex justify-end flex-grow items-center gap-1">
          {isAuthenticated && (
            <>
              <Button
                text="Summary"
                style={
                  location.pathname.startsWith("/summary") ? null : "ghost"
                }
                onClick={() =>
                  navigate(`/summary/${currentMonth}/${currentYear}`)
                }
              />
              <Button
                text="Accounts"
                style={
                  location.pathname.startsWith("/accounts") ? null : "ghost"
                }
                onClick={() => navigate("/accounts")}
              />
              <Button
                text="Budget"
                style={
                  location.pathname.startsWith("/budgets") ? null : "ghost"
                }
                onClick={() =>
                  navigate(`/budgets/${currentMonth}/${currentYear}`)
                }
              />
              <Button
                text="Funds"
                style={location.pathname.startsWith("/funds") ? null : "ghost"}
                onClick={() => navigate("/funds")}
              />
              <Button
                text="Transactions"
                style={
                  location.pathname.startsWith("/transactions") ? null : "ghost"
                }
                onClick={() => navigate("/transactions")}
              />
            </>
          )}
        </div>
        <div className="hidden sm:flex justify-end flex-grow items-center">
          {isAuthenticated ? (
            <Menu icon={<UserCircleIcon className="h-10 text-gray-800" />}>
              <MenuItem
                title="Profile"
                onClick={() => navigate("/user/profile")}
              />
              <MenuItem title="Logout" onClick={logout} />
            </Menu>
          ) : (
            <>
              <Button
                text={"Login"}
                style="ghost"
                onClick={() => navigate("/login")}
              />
              <Button
                text={"Sign Up"}
                style="ghost"
                onClick={() => navigate("/signup")}
              />
            </>
          )}
        </div>
        <div className="sm:hidden flex justify-end flex-grow items-center">
          {isAuthenticated ? (
            <Menu icon={<List size={25} className="text-gray-800" />}>
              <MenuItem
                title="Profile"
                icon={<UserCircle size={25} className="text-gray-800" />}
                onClick={() => navigate("/user/profile")}
                active={location.pathname.startsWith("/user/profile")}
              />
              <MenuItem
                title="Summary"
                icon={<PresentationChart size={25} className="text-gray-800" />}
                onClick={() =>
                  navigate(`/summary/${currentMonth}/${currentYear}`)
                }
                active={location.pathname.startsWith("/summary")}
              />
              <MenuItem
                title="Accounts"
                icon={<Bank size={25} className="text-gray-800" />}
                onClick={() => navigate("/accounts")}
                active={location.pathname.startsWith("/accounts")}
              />
              <MenuItem
                title="Budget"
                icon={<Calculator size={25} className="text-gray-800" />}
                onClick={() =>
                  navigate(`/budgets/${currentMonth}/${currentYear}`)
                }
                active={location.pathname.startsWith("/budgets")}
              />
              <MenuItem
                title="Funds"
                icon={<Coins size={25} className="text-gray-800" />}
                onClick={() => navigate("/funds")}
                active={location.pathname.startsWith("/funds")}
              />
              <MenuItem
                title="Transactions"
                icon={<Receipt size={25} className="text-gray-800" />}
                onClick={() => navigate("/transactions")}
                active={location.pathname.startsWith("/transactions")}
              />
              <MenuItem
                title="Logout"
                icon={<SignOut size={25} className="text-gray-800" />}
                onClick={logout}
              />
            </Menu>
          ) : (
            <>
              <Button
                text={"Login"}
                style="ghost"
                onClick={() => navigate("/login")}
              />
              <Button
                text={"Sign Up"}
                style="ghost"
                onClick={() => navigate("/signup")}
              />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
