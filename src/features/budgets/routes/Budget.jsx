import { useParams } from "react-router-dom";

import { AnimatedDetailHeader } from "@/components/Elements/AnimatedDetailHeader";
import { Loader } from "@/components/Elements/Loader";
import { Layout } from "@/components/Layout";
import {
  TransactionsList,
  useBudgetTransactions,
} from "@/features/transactions";
import { formatCurrency } from "@/utils/currency";

import { useBudget } from "../hooks/useBudget";
import BudgetEntry from "../components/BudgetEntry";
import { AnimatedList } from "@/components/Elements/AnimatedList";
import { AnimatedCard } from "@/components/Elements/AnimatedCard";
import { BudgetProgressBar } from "../components/BudgetProgressBar";

const Budget = () => {
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
      <TransactionsList
        title="Transactions"
        transactions={transactionsQuery.data}
        isLoading={transactionsQuery.isLoading}
        error={transactionsQuery.error}
      />
      {/* <TransactionsList
        title="Previous Months"
        transactions={[]}
        isLoading={transactionsQuery.isLoading}
        error={transactionsQuery.error}
      /> */}
    </Layout>
  );
};

export default Budget;
