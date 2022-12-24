import { useNavigate, useParams } from "react-router-dom";

import { AnimatedDetailHeader } from "@/components/Elements/AnimatedDetailHeader";
import { Loader } from "@/components/Elements/Loader";
import { Layout } from "@/components/Layout";
import {
  TransactionsList,
  useBudgetTransactions,
} from "@/features/transactions";
import { formatCurrency } from "@/utils/currency";

import { useBudget } from "../hooks/useBudget";
import { BudgetProgressBar } from "../components/BudgetProgressBar";
import { Button } from "@/components/Elements/Button";
import { deleteBudget } from "../api/deleteBudget";

const Budget = () => {
  const navigate = useNavigate();
  const { budgetId, month } = useParams();
  const budgetQuery = useBudget({ budgetId, month });
  const transactionsQuery = useBudgetTransactions({ budgetId, month });

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
    <Layout>
      <div className="flex flex-col items-center gap-1 py-5">
        <AnimatedDetailHeader
          title={budget.name}
          titleIcon={budget.icon}
          subtitle={month}
        />
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
        transactions={transactionsQuery.data}
        isLoading={transactionsQuery.isLoading}
        error={transactionsQuery.error}
      />
    </Layout>
  );
};

export default Budget;
