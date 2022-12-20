import { Link, useLocation, useNavigate } from "react-router-dom";
import { CurrencyDollarIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

import { Button } from "@/components/Elements/Button";
import useAuth from "@/hooks/useAuth";
import { getCurrentMonthInURLFormat } from "@/utils";

export const Navbar = ({ back }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const currentMonth = getCurrentMonthInURLFormat();

  return (
    <nav className="flex justify-center w-full bg-gray-100 border-b border-gray-300">
      <div className="flex w-full items-center gap-1 px-3 h-16 max-w-3xl">
        {back && (
          <button onClick={() => navigate(-1)}>
            <ArrowLeftCircleIcon className="h-8 text-gray-800" />
          </button>
        )}
        <button className="flex" onClick={() => navigate("/")}>
          <CurrencyDollarIcon className="h-8 text-gray-800" />
          <h3 className="text-2xl font-extrabold text-gray-800">Dink</h3>
        </button>
        <div className="flex justify-end flex-grow items-center gap-1">
          {auth.user && (
            <>
              <Button
                text="Summary"
                style={
                  location.pathname.startsWith("/summary") ? null : "ghost"
                }
                onClick={() => navigate(`/summary/${currentMonth}`)}
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
                onClick={() => navigate("/budgets")}
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
        <div className="flex justify-end flex-grow items-center gap-1">
          {auth.user ? (
            <Link to="/user/profile">
              <UserCircleIcon className="h-8 text-gray-800" />
            </Link>
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
