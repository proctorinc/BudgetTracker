import { capitalizeFirstLetter } from "@/utils";
import { CaretRight, Receipt } from "phosphor-react";

import TransactionUpdateDetail from "./TransactionDetail";
import UpdateSource from "../update/UpdateSource";

const SourceDetail = ({ source, setSelected, month, year, onUpdate }) => {
  const updateSource = (
    <UpdateSource
      source={source}
      month={month}
      year={year}
      onUpdate={onUpdate}
    />
  );

  const selectUpdate = () => {
    setSelected(updateSource);
  };

  return (
    <TransactionUpdateDetail
      label={"Source"}
      icon={<Receipt size={25} weight="fill" />}
      onClick={selectUpdate}
      actionItem={<CaretRight size={25} />}
    >
      {source?.id && source?.type ? (
        <p>
          {capitalizeFirstLetter(source.type)} / {source.name}
        </p>
      ) : (
        <div>None</div>
      )}
    </TransactionUpdateDetail>
  );
};

export default SourceDetail;
