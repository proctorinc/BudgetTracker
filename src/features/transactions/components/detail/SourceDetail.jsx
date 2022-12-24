import { Receipt, PlusCircle } from "phosphor-react";

import TransactionUpdateDetail from "./TransactionDetail";

const UpdateSource = ({ source }) => {
  return (
    <TransactionUpdateDetail
      label={"Source"}
      icon={<Receipt size={25} weight="fill" />}
      onClick={() => console.log("Go to update source")}
      actionItem={source.type ? null : <PlusCircle size={25} weight="light" />}
    >
      {source.name ? (
        <>
          <label>
            Type: <i>{source.type ? source.type : "None"}</i>
          </label>
          <label>
            Name: <i>{source.name ? source.name : "None"}</i>
          </label>
        </>
      ) : (
        <div>None</div>
      )}
    </TransactionUpdateDetail>
  );
};

export default UpdateSource;
