import { Toggle } from "@/components/Elements/Toggle";
import { ArrowsClockwise } from "phosphor-react";
import { useState } from "react";

import TransactionUpdateDetail from "./TransactionDetail";

const TransferDetail = () => {
  const [enabled, setEnabled] = useState(false);

  const toggleEnabled = () => {
    setEnabled(!enabled);
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
