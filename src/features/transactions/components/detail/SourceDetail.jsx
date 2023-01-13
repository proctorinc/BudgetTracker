import { capitalizeFirstLetter } from "@/utils";
import { CaretRight, Receipt } from "phosphor-react";

import TransactionUpdateDetail from "./TransactionDetail";
import UpdateSource from "../update/UpdateSource";

const SourceDetail = ({
  source,
  isTransfer,
  setSelected,
  month,
  year,
  onUpdate,
}) => {
  const updateSource = (
    <UpdateSource
      initialSource={source}
      month={month}
      year={year}
      onUpdate={onUpdate}
    />
  );

  const selectUpdate = () => {
    if (!isTransfer) {
      setSelected(updateSource);
    }
  };

  console.log(source?.is_transfer);

  return (
    <TransactionUpdateDetail
      label={"Source"}
      icon={<Receipt size={25} weight="fill" />}
      onClick={selectUpdate}
      actionItem={isTransfer ? null : <CaretRight size={25} />}
    >
      {source?.type ? (
        <p>
          {capitalizeFirstLetter(source.type)}{" "}
          {source?.id && <span>/ {source.name}</span>}
        </p>
      ) : (
        <p>{isTransfer ? "Transfer" : "None"}</p>
      )}
    </TransactionUpdateDetail>
  );
};

export default SourceDetail;
