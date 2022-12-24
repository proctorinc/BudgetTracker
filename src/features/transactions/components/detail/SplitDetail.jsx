import { GitFork, CaretRight } from "phosphor-react";

import TransactionUpdateDetail from "./TransactionDetail";

const SplitDetail = () => {
  return (
    <TransactionUpdateDetail
      label={"Split Transaction"}
      icon={<GitFork size={25} weight="fill" />}
      onClick={() => console.log("Clicked on split transaction detail")}
      actionItem={<CaretRight size={25} />}
    ></TransactionUpdateDetail>
  );
};

export default SplitDetail;
