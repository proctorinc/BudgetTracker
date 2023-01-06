import { useLocation, useNavigate } from "react-router-dom";
import { CurrencyDollarIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

import { Button } from "@/components/Elements/Button";
import useAuth from "@/features/auth/hooks/useAuth";
import { getCurrentMonth, getCurrentYear } from "@/utils";
import { Menu } from "../Elements/Menu";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAuth();

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
        <div className="flex justify-end flex-grow items-center gap-1">
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
                text={"Accounts"}
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
        <div className="flex justify-end flex-grow items-center">
          {isAuthenticated ? (
            <Menu />
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
                onClick={() => navigate("/sign-up")}
              />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
