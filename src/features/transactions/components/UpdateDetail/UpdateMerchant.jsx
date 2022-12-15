import { AutocompleteInput } from "@/components/Form/AutocompleteInput";
import { useState } from "react";
import TransactionUpdateDetail from "./UpdateDetail";
import { BuildingStorefrontIcon } from "@heroicons/react/20/solid";
import { Input } from "@/components/Form/Input";
import { updateTransaction } from "../../api/updateTransaction";

const UpdateMerchant = ({ merchant }) => {
  const [selectedMerchant, setSelectedMerchant] = useState(merchant);

  return (
    <TransactionUpdateDetail
      label={"Merchant"}
      icon={<BuildingStorefrontIcon />}
      onSubmit={(event) => {
        event.preventDefault();
        updateTransaction({
          merchant: selectedMerchant,
        });
      }}
    >
      <Input
        className="input-sm"
        key="merchant-input"
        value={selectedMerchant}
        onChange={setSelectedMerchant}
      />
    </TransactionUpdateDetail>
  );
};

export default UpdateMerchant;
