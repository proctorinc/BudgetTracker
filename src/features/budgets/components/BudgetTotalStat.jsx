import { formatCurrency } from "@/utils/currency";
import { BudgetProgressBar } from "./BudgetProgressBar";

const BudgetTotalStat = ({ spent, goal }) => {
  const percentSpent = (spent / goal) * 100;

  return (
    <div className="flex flex-col w-full pb-5">
      <BudgetProgressBar spent={spent} goal={goal} />
      <p className="w-full text-md">
        {formatCurrency(spent)} of {formatCurrency(goal)}
        <span className="float-right">{Math.ceil(percentSpent)}% spent</span>
      </p>
    </div>
  );
};

export default BudgetTotalStat;
