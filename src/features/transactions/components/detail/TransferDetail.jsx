import { ArrowsClockwise } from "phosphor-react";

import { Toggle } from "@/components/Elements/Toggle";

import TransactionUpdateDetail from "./TransactionDetail";

const TransferDetail = ({ isTransfer, onUpdate }) => {
  const toggleEnabled = (checked) => {
    onUpdate({ is_transfer: checked });
  };

  return (
    <TransactionUpdateDetail
      label={"Mark as Transfer"}
      icon={<ArrowsClockwise size={25} weight="fill" />}
      actionItem={
        <Toggle
          enabled={isTransfer ? true : false}
          setEnabled={toggleEnabled}
        />
      }
    />
  );
};

export default TransferDetail;
