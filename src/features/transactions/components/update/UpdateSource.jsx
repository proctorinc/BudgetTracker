import { useState } from "react";

import { Loader } from "@/components/Elements/Loader";
import { ListBoxInput } from "@/components/Form/ListBoxInput";
import { useBudgets } from "@/features/budgets";
import { useFunds } from "@/features/funds";
import { capitalizeFirstLetter } from "@/utils";
import { Button } from "@/components/Elements/Button";

const UpdateSource = ({ initialSource, month, year, onUpdate }) => {
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

  const updateTransactionSource = () => {
    if (source && type) {
      onUpdate({ source: { id: source._id, type, name: source.name } });
    }
  };

  const removeTransactionSource = () => {
    onUpdate({ source: { id: null, type: null, name: null } });
  };

  const toggleType = (type) => {
    setType(type);
    setSource(type === types[0] ? budgets[0] : funds[0]);
  };

  return (
    <div className="flex flex-col gap-5 items-center">
      <h1 className="text-6xl">Source</h1>
      <div className="flex gap-3">
        <ListBoxInput
          selected={type}
          setSelected={toggleType}
          choices={types}
          renderItem={(item) => capitalizeFirstLetter(item)}
        />
        <ListBoxInput
          selected={source}
          setSelected={setSource}
          choices={type == types[0] ? budgets : funds}
          renderItem={(item) =>
            item?.name ? capitalizeFirstLetter(item?.name) : "--"
          }
          itemKey={(item) => item._id}
        />
      </div>
      <Button text="Save" onClick={updateTransactionSource} />
      <Button
        text="Remove Source"
        style="ghost"
        onClick={removeTransactionSource}
        disabled={source.name === null}
      />
    </div>
  );
};

export default UpdateSource;
