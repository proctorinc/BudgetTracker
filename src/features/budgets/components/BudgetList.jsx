import { useState } from "react";

import { DraggableList } from "@/components/Elements/DraggableList";
import { Loader } from "@/components/Elements/Loader";
import { ListBoxInput } from "@/components/Form/ListBoxInput";

import { useBudgets } from "../hooks/useBudgets";
import BudgetEntry from "./BudgetEntry";

const BudgetList = ({ months }) => {
  const [month, setMonth] = useState(months[0]);
  const budgetsQuery = useBudgets({ month });

  if (budgetsQuery.error) {
    return <div>Error: {budgetsQuery.error}</div>;
  }

  const budgetEntries = budgetsQuery.data?.map((budget) => {
    return <BudgetEntry key={budget.name} budget={budget} month={month} />;
  });

  return (
    <>
      <div>
        <div className="pb-3">
          <ListBoxInput
            selected={month}
            setSelected={setMonth}
            choices={months}
          />
        </div>
        {budgetsQuery.isLoading ? (
          <Loader />
        ) : (
          <DraggableList>{budgetEntries}</DraggableList>
        )}
      </div>
    </>
  );
};

export default BudgetList;
