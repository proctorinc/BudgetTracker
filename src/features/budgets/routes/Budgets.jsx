import { Layout } from "@/components/Layout";

import BudgetList from "../components/BudgetList";
import { useBudgets } from "../hooks/useBudgets";

const Budgets = () => {
  const { data, isLoading, error } = useBudgets();

  return (
    <Layout title="Budgets">
      <BudgetList budgets={data?.budgets} isLoading={isLoading} error={error} />
    </Layout>
  );
};

export default Budgets;
