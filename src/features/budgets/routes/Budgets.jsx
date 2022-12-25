import { useNavigate, useParams } from "react-router-dom";

import { Layout } from "@/components/Layout";
import { ActiveMonthsListBox } from "@/components/Form/ListBoxInput/ActiveMonthsListBox";
import { Button } from "@/components/Elements/Button";
import { formatCurrency } from "@/utils/currency";

import BudgetList from "../components/BudgetList";
import { useBudgets } from "../hooks/useBudgets";
import BudgetTotalStat from "../components/BudgetTotalStat";

const Budgets = () => {
  const { month, year } = useParams();
  const navigate = useNavigate();
  const date = { month, year };
  const budgetsQuery = useBudgets(date);

  const totalSpent = budgetsQuery.data?.total.spent;
  const totalGoal = budgetsQuery.data?.total.goal;
  const budgetsTotal = formatCurrency(budgetsQuery.data?.total.leftover);
  const budgets = budgetsQuery.data?.budgets;

  const handleSelectedMonth = (date) => {
    navigate(`/budgets/${date.month}/${date.year}`);
  };

  return (
    <Layout
      title="Budgets"
      subtitle={`Left: ${budgetsTotal}`}
      isLoading={budgetsQuery.isLoading}
    >
      <BudgetTotalStat spent={totalSpent} goal={totalGoal} />
      <ActiveMonthsListBox initialMonth={date} onSelect={handleSelectedMonth} />
      <BudgetList budgets={budgets} date={date} />
      <div className="flex justify-center p-5">
        <Button text="New Budget" onClick={() => navigate("/budgets/create")} />
      </div>
    </Layout>
  );
};

export default Budgets;
