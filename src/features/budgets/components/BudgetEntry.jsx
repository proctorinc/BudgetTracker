import { useNavigate } from "react-router-dom";

import { formatCurrency } from "@/utils/currency";
import { BudgetProgressBar } from "./BudgetProgressBar";

const BudgetEntry = ({ budget }) => {
  const navigate = useNavigate();
  const currentAmount = formatCurrency(budget.currentAmount);
  const goal = formatCurrency(budget.goal);
  const leftover = formatCurrency(budget.goal - budget.currentAmount);

  const navigateToBudget = () => navigate(`/budgets/${budget._id}`);

  return (
    <div
      onClick={navigateToBudget}
      className="flex flex-col border border-gray-600 px-4 py-1 rounded-lg hover:bg-gray-200"
    >
      <h3 className="text-lg font-semibold">{budget.name}</h3>
      <BudgetProgressBar budget={budget} />
      <p className="w-full text-sm">
        {currentAmount} of {goal}
        <span className="float-right">{leftover} left</span>
      </p>
    </div>
  );
};

export default BudgetEntry;
