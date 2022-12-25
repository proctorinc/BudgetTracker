import { DraggableList } from "@/components/Elements/DraggableList";

import BudgetEntry from "./BudgetEntry";

const BudgetList = ({ budgets, date }) => {
  const budgetEntries = budgets.map((budget) => {
    return <BudgetEntry key={budget.name} budget={budget} date={date} />;
  });

  return <DraggableList>{budgetEntries}</DraggableList>;
};

export default BudgetList;
