import BudgetEntry from "./BudgetEntry";

const BudgetList = ({ budgets, isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const budgetEntries = budgets.map((budget) => {
    return (
      <li key={budget.name}>
        <BudgetEntry budget={budget} />
      </li>
    );
  });

  return <ul className="flex flex-col list-none gap-1">{budgetEntries}</ul>;
};

export default BudgetList;
