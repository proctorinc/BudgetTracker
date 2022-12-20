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

  return (
    <Layout back={true}>
      <div className="flex flex-col items-center gap-1 py-5">
        <AnimatedDetailHeader
          title={budget.name}
          titleIcon={budget.icon}
          subtitle={month}
        />
        <div className="">
          {formatCurrency(budget.currentAmount)} / {formatCurrency(budget.goal)}
        </div>
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
