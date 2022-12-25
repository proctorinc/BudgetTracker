import { useNavigate, useParams } from "react-router-dom";

import { Loader } from "@/components/Elements/Loader";
import { DetailLayout } from "@/components/Layout";
import { formatCurrency } from "@/utils/currency";
import { Button } from "@/components/Elements/Button";
import {
  TransactionsList,
  useBudgetTransactions,
} from "@/features/transactions";

import { useBudget } from "../hooks/useBudget";
import { BudgetProgressBar } from "../components/BudgetProgressBar";
import { deleteBudget } from "../api/deleteBudget";
import { capitalizeFirstLetter } from "@/utils";

const Budget = () => {
  const navigate = useNavigate();
  const { budgetId, month } = useParams();
  const budgetQuery = useBudget({ budgetId, month });

  if (budgetQuery.isLoading) {
    return <Loader />;
  }

  if (budgetQuery.error) {
    return <div>Error loading account</div>;
  }

  const budget = budgetQuery.data;
  const currentAmount = formatCurrency(budget.currentAmount);
  const goal = formatCurrency(budget.goal);
  const leftover = formatCurrency(goal - currentAmount);
  const percentUsed =
    budget.currentAmount && budget.goal ? (currentAmount / goal) * 100 : 0;

  const handleDelete = () => {
    deleteBudget({ id: budget._id })
      .catch((err) => console.log(err))
      .then(() => {
        navigate("/budgets");
      });
  };

  return (
    <DetailLayout
      title={budget.name}
      titleIcon={budget.icon}
      subtitle={capitalizeFirstLetter(month)}
    >
      <div className="flex flex-col items-center gap-1 py-5">
        <div className="flex justify-center gap-2 border bg-gray-200 border-gray-200 p-3 rounded-md w-full">
          <div className="flex flex-col w-full px-3">
            <h3 className="text-3xl font-extralight text-center p-5">
              {percentUsed}% Used
            </h3>
            <BudgetProgressBar budget={budget} />
            <p className="text-sm text-gray-600 p-1">
              {currentAmount} of {goal}
              <span className="float-right">{leftover} left</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <Button text="Delete" onClick={handleDelete} />
      </div>
      <TransactionsList
        title="Transactions"
        useHook={useBudgetTransactions}
        hookParameters={[budgetId, month]}
      />
    </DetailLayout>
  );
};

export default Budget;
