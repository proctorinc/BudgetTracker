import { GitFork, CaretRight } from "phosphor-react";
import UpdateSplit from "../update/UpdateSplit";

import TransactionUpdateDetail from "./TransactionDetail";

const SplitDetail = ({ setSelected }) => {
  return (
    <TransactionUpdateDetail
      label={"Split Transaction"}
      icon={<GitFork size={25} weight="fill" />}
      onClick={() => setSelected(<UpdateSplit />)}
      actionItem={<CaretRight size={25} />}
    ></TransactionUpdateDetail>
  );
};

export default SplitDetail;
