import { useState } from "react";
import { ArrowsClockwise } from "phosphor-react";

import { Toggle } from "@/components/Elements/Toggle";

import TransactionUpdateDetail from "./TransactionDetail";

const TransferDetail = ({ isTransfer, onUpdate }) => {
  const [enabled, setEnabled] = useState(isTransfer);

  const toggleEnabled = () => {
    const isEnabled = !enabled;
    setEnabled(isEnabled);
    onUpdate({ is_transfer: isEnabled });
  };

  return (
    <TransactionUpdateDetail
      label={"Mark as Transfer"}
      icon={<ArrowsClockwise size={25} weight="fill" />}
      onClick={toggleEnabled}
      actionItem={<Toggle enabled={enabled} setEnabled={setEnabled} />}
    ></TransactionUpdateDetail>
  );
};

export default TransferDetail;
