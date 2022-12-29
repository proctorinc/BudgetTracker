import { useState } from "react";

import { Loader } from "@/components/Elements/Loader";
import { ListBoxInput } from "@/components/Form/ListBoxInput";
import { useBudgets } from "@/features/budgets";
import { useFunds } from "@/features/funds";
import { capitalizeFirstLetter } from "@/utils";
import { Button } from "@/components/Elements/Button";

const UpdateSource = ({ initialSource, month, year }) => {
  const types = ["budget", "fund"];
  const fundsQuery = useFunds();
  const budgetsQuery = useBudgets({ month, year });
  const [source, setSource] = useState(initialSource);
  const [type, setType] = useState(
    initialSource?.type ? initialSource.type : types[0]
  );
  const budgets = budgetsQuery.isLoading ? [] : budgetsQuery.data?.budgets;
  const funds = fundsQuery.isLoading ? [] : fundsQuery.data?.funds;

  if (fundsQuery.isLoading || budgetsQuery.isLoading) {
    return <Loader />;
  }
  return (
    <div className="flex flex-col gap-5 items-center">
      <h1 className="text-6xl">Source</h1>
      <div className="flex gap-3">
        <ListBoxInput
          selected={type}
          setSelected={setType}
          choices={types}
          renderItem={(item) => capitalizeFirstLetter(item)}
        />
        <ListBoxInput
          selected={source}
          setSelected={setSource}
          choices={type == types[0] ? budgets : funds}
          renderItem={(item) => capitalizeFirstLetter(item?.name)}
          itemKey={(item) => item._id}
        />
      </div>
      <Button text="Save" onClick={() => console.log("Update source")} />
    </div>
  );
};

export default UpdateSource;
