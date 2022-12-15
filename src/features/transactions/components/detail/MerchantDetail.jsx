import TransactionUpdateDetail from "./TransactionDetail";
import { BuildingStorefrontIcon } from "@heroicons/react/20/solid";

const MerchantDetail = ({ merchant }) => {
  return (
    <TransactionUpdateDetail
      label={"Merchant"}
      icon={<BuildingStorefrontIcon />}
      onClick={() => console.log("Go to update merchant")}
    >
      <p>{merchant}</p>
    </TransactionUpdateDetail>
  );
};

export default MerchantDetail;
