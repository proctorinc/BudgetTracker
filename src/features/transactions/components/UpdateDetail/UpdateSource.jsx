import { AutocompleteInput } from "@/components/Form/AutocompleteInput";
import { useState } from "react";
import TransactionUpdateDetail from "./UpdateDetail";
import { CurrencyDollarIcon } from "@heroicons/react/20/solid";
import { ListBoxInput } from "@/components/Form/ListBoxInput";
import { updateTransaction } from "../../api/updateTransaction";
import { useBudgets } from "@/features/budgets";
import { useFunds } from "@/features/funds";

// source
// {
// id: either fund or budget id
// type: "fund" or "budget"
// name: name of fund or budget
// }

const UpdateSource = ({ initialSource }) => {
  const [selectedSource, setSelectedSource] = useState(initialSource);
  const budgets = useBudgets();
  const funds = useFunds();
  const sourceTypes = ["fund", "budget"];

  if (budgets.isLoading || funds.isLoading) {
    return <div>Loading...</div>;
  }

  if (budgets.error) {
    return <div>Error: {budgets.error}</div>;
  }

  if (funds.error) {
    return <div>Error: {funds.error}</div>;
  }

  const handleSelectType = (type) => {
    console.log(`TYPE: ${type}`);
    setSelectedSource(type === "budget" ? budgets[0] : funds[0]);
  };

  return (
    <TransactionUpdateDetail
      label={"Source"}
      icon={<CurrencyDollarIcon />}
      onSubmit={(event) => {
        event.preventDefault();
        updateTransaction({
          source: { type: selectedSource.type, name: selectedSource },
        });
      }}
    >
      <ListBoxInput
        label="Type"
        selected={selectedSource.type}
        setSelected={handleSelectType}
        choices={sourceTypes}
      />
      <ListBoxInput
        label="Name"
        selected={selectedSource.name}
        setSelected={setSelectedSource}
        choices={
          selectedSource.type === "budget"
            ? budgets.data.map((budget) => budget.name)
            : funds.data.map((fund) => fund.name)
        }
      />
    </TransactionUpdateDetail>
  );
};

export default UpdateSource;
