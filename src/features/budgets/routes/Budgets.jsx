import { Layout } from "@/components/Layout";

import BudgetList from "../components/BudgetList";
import { useBudgets } from "../hooks/useBudgets";

const Budgets = () => {
  const budgetsQuery = useBudgets();

  return (
    <Layout title="Budgets">
      <BudgetList
        budgets={budgetsQuery.data?.budgets}
        isLoading={budgetsQuery.isLoading}
        error={budgetsQuery.error}
      />
    </Layout>
  );
};

export default Budgets;
