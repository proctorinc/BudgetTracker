import { Layout } from "@/components/Layout";
import { useActiveMonths } from "@/features/summary";
import { Loader } from "@/components/Elements/Loader";

import BudgetList from "../components/BudgetList";

const Budgets = () => {
  const monthsQuery = useActiveMonths();

  return (
    <Layout title="Budgets">
      {monthsQuery.isLoading ? (
        <Loader />
      ) : (
        <BudgetList months={monthsQuery.data} />
      )}
    </Layout>
  );
};

export default Budgets;
