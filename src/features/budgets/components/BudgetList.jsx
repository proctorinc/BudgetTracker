import { Loader } from "@/components/Elements/Loader";
import BudgetEntry from "./BudgetEntry";

const BudgetList = ({ budgets, isLoading, error }) => {
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    console.log(error);
    return <div>Error</div>;
  }

  const budgetEntries = budgets?.map((budget) => {
    return (
      <li key={budget.name}>
        <BudgetEntry budget={budget} />
      </li>
    );
  });

  return <ul className="flex flex-col list-none gap-1">{budgetEntries}</ul>;
};

export default BudgetList;
