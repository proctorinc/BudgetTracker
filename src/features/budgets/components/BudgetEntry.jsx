import { useNavigate } from "react-router-dom";

import { formatCurrency } from "@/utils/currency";
import { IconFromText } from "@/components/Misc/IconFromText/IconFromText";
import { AnimatedCard } from "@/components/Elements/AnimatedCard";

import { BudgetProgressBar } from "./BudgetProgressBar";

const BudgetEntry = ({ budget, month }) => {
  const navigate = useNavigate();
  const currentAmount = formatCurrency(budget.currentAmount);
  const goal = formatCurrency(budget.goal);
  const leftover = formatCurrency(budget.goal - budget.currentAmount);

  const navigateToBudget = () => navigate(`/budgets/${budget._id}/${month}`);

  return (
    <AnimatedCard onClick={navigateToBudget}>
      <IconFromText text={budget.icon} className="h-6" />
      <div className="flex flex-col w-full px-3">
        <h3 className="text-lg font-semibold">{budget.name}</h3>
        <BudgetProgressBar budget={budget} />
        <p className="w-full text-sm">
          {currentAmount} of {goal}
          <span className="float-right">{leftover} left</span>
        </p>
      </div>
    </AnimatedCard>
  );
};

export default BudgetEntry;
