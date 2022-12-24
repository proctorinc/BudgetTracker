import { useNavigate } from "react-router-dom";

import { Layout } from "@/components/Layout";
import { useActiveMonths } from "@/features/summary";
import { Loader } from "@/components/Elements/Loader";
import { Button } from "@/components/Elements/Button";

import BudgetList from "../components/BudgetList";

const Budgets = () => {
  const navigate = useNavigate();
  const monthsQuery = useActiveMonths();

  return (
    <Layout title="Budgets">
      {monthsQuery.isLoading ? (
        <Loader />
      ) : (
        <BudgetList months={monthsQuery.data} />
      )}
      <div className="flex justify-center p-5">
        <Button text="New Budget" onClick={() => navigate("/budgets/create")} />
      </div>
    </Layout>
  );
};

export default Budgets;
