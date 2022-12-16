import { useNavigate } from "react-router-dom";

import { formatCurrency } from "@/utils/currency";
import { BudgetBarChart } from "./BudgetBarChart";

const BudgetEntry = ({ budget }) => {
  const navigate = useNavigate();
  const currentAmount = formatCurrency(budget.currentAmount);
  const goal = formatCurrency(budget.goal);
  const leftover = formatCurrency(budget.goal - budget.currentAmount);

  const navigateToBudget = () => navigate(`/budgets/${budget._id}`);

  return (
    <div onClick={navigateToBudget} className="flex flex-col">
      <h3 className="text-xl font-semibold">{budget.name}</h3>
      <BudgetBarChart budget={budget} />
      <div className="w-full">
        <p className="text-left">
          {currentAmount} of {goal}
        </p>
        <p className="text-right">{leftover} left</p>
      </div>
    </div>
  );
};

export default BudgetEntry;
