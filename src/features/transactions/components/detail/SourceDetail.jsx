import { Receipt } from "phosphor-react";
import UpdateSource from "../update/UpdateSource";

import TransactionUpdateDetail from "./TransactionDetail";

const SourceDetail = ({ source, setSelected, month, year }) => {
  return (
    <TransactionUpdateDetail
      label={"Source"}
      icon={<Receipt size={25} weight="fill" />}
      onClick={() =>
        setSelected(<UpdateSource source={source} month={month} year={year} />)
      }
    >
      {source?.name ? (
        <>
          <label>
            Type: <i>{source?.type ? source?.type : "None"}</i>
          </label>
          <label>
            Name: <i>{source?.name ? source?.name : "None"}</i>
          </label>
        </>
      ) : (
        <div>None</div>
      )}
    </TransactionUpdateDetail>
  );
};

export default SourceDetail;
