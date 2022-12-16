import { MainLayout } from "@/components/Layout";
import { mockBudgets } from "@/__mocks__/mock_data/budgets";
import BudgetList from "../components/BudgetList";
import { useBudgets } from "../hooks/useBudgets";

const Budgets = () => {
  const { data, isLoading, error } = useBudgets();

  return (
    <MainLayout>
      <h1 className="text-6xl font-bold py-5">Budgets</h1>
      <BudgetList budgets={data?.budgets} isLoading={isLoading} error={error} />
    </MainLayout>
  );
};

export default Budgets;
