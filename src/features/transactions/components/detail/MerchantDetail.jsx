import { Storefront } from "phosphor-react";

import TransactionUpdateDetail from "./TransactionDetail";

const MerchantDetail = ({ merchant }) => {
  return (
    <TransactionUpdateDetail
      label={"Merchant"}
      icon={<Storefront size={25} weight="fill" />}
      onClick={() => console.log("Go to update merchant")}
    >
      <p>{merchant}</p>
    </TransactionUpdateDetail>
  );
};

export default MerchantDetail;
