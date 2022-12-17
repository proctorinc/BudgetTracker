import { AnimatedList } from "@/components/Elements/AnimatedList";
import { Loader } from "@/components/Elements/Loader";
import BudgetEntry from "./BudgetEntry";

const BudgetList = ({ budgets, isLoading, error }) => {
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error</div>;
  }

  const budgetEntries = budgets?.map((budget) => {
    return <BudgetEntry key={budget.name} budget={budget} />;
  });

  return <AnimatedList>{budgetEntries}</AnimatedList>;
};

export default BudgetList;
