import { MainLayout } from "@/components/Layout";

import BudgetList from "../components/BudgetList";
import { useBudgets } from "../hooks/useBudgets";

const Budgets = () => {
  const { data, isLoading, error } = useBudgets();

  return (
    <MainLayout title="Budgets">
      <BudgetList budgets={data?.budgets} isLoading={isLoading} error={error} />
    </MainLayout>
  );
};

export default Budgets;
