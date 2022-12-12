import { AutocompleteInput } from "@/components/Form/AutocompleteInput";
import { useState } from "react";
import TransactionUpdateDetail from "./UpdateDetail";
import { CurrencyDollarIcon } from "@heroicons/react/20/solid";
import { ListBoxInput } from "@/components/Form/ListBoxInput";

const UpdateSource = ({ source }) => {
  const [selectedType, setSelectedType] = useState(source.type);
  const [selectedSource, setSelectedSource] = useState(source.name);

  //   const { budgets } = useBudgets();
  //   const { funds } = useFunds();
  //   const { sourceTypes } = useSources();

  const sourceTypes = ["funds", "budget"];
  const budgets = ["Rent", "Eating out", "Shopping", "Misc Expenses"];
  const funds = [
    "Car Funds",
    "House Fund",
    "Annika Allowance",
    "Matt Allowance",
  ];

  const handleSelectType = (type) => {
    console.log(type);
    setSelectedType(type);
    setSelectedSource(type === "budget" ? budgets[0] : funds[0]);
  };

  const sourceTypesInput = (
    <ListBoxInput
      key="sourceTypes"
      label="Type"
      selected={selectedType}
      setSelected={handleSelectType}
      choices={sourceTypes}
    />
  );
  const sourceInput = (
    <ListBoxInput
      key="source"
      label="Name"
      selected={selectedSource}
      setSelected={setSelectedSource}
      choices={selectedType === "budget" ? budgets : funds}
    />
  );

  return (
    <TransactionUpdateDetail
      label={"Source"}
      icon={<CurrencyDollarIcon />}
      inputs={[sourceTypesInput, sourceInput]}
      onSubmit={() => {}}
    />
  );
};

export default UpdateSource;
