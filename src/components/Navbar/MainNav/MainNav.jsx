import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CurrencyDollarIcon } from "@heroicons/react/20/solid";

import { Button } from "@/components/Elements/Button";

export const MainNav = () => {
  const navigate = useNavigate();
  const variants = {
    hidden: {
      y: -50,
    },
    show: {
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 80,
      },
    },
  };

  return (
    <nav
      variants={variants}
      initial="hidden"
      animate="show"
      className="flex justify-center w-full bg-gray-100 border-b border-gray-300"
    >
      <div className="flex w-full items-center gap-1 px-3 h-16 max-w-3xl">
        <button className="flex" onClick={() => navigate("/")}>
          <CurrencyDollarIcon className="h-8 text-gray-800" />
          <h3 className="text-2xl font-extrabold text-gray-800">Dink</h3>
        </button>
        <div className="flex justify-end flex-grow items-center gap-1">
          <Button text={"Accounts"} onClick={() => navigate("/accounts")} />
          <Button text={"Funds"} onClick={() => navigate("/funds")} />
          <Button text={"Budget"} onClick={() => navigate("/budgets")} />
        </div>
      </div>
    </nav>
  );
};
