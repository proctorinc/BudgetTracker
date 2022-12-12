import { AutocompleteInput } from "@/components/Form/AutocompleteInput";
import { useState } from "react";
import TransactionUpdateDetail from "./UpdateDetail";
import { BuildingStorefrontIcon } from "@heroicons/react/20/solid";
import { ListBoxInput } from "@/components/Form/ListBoxInput";
import { Input } from "@/components/Form/Input";

const UpdateMerchant = ({ merchant }) => {
  const [selectedMerchant, setSelectedMerchant] = useState(merchant);

  const merchantInput = (
    <Input
      className="input-sm"
      key="merchant-input"
      value={selectedMerchant}
      onChange={setSelectedMerchant}
    />
  );

  return (
    <TransactionUpdateDetail
      label={"Merchant"}
      icon={<BuildingStorefrontIcon />}
      inputs={[merchantInput]}
      onSubmit={() => {}}
    />
  );
};

export default UpdateMerchant;
