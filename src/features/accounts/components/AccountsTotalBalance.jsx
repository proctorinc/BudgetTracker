import { formatCurrency } from "@/utils/currency";
import { useAccounts } from "../hooks/useAccounts";

const AccountsTotalBalance = () => {
  const { data } = useAccounts();

  return (
    <div className="flex pb-5">
      <div className="bg-gray-200 rounded-md py-2 px-4 w-fit">
        <h1 className="text-3xl font-extralight">
          Net Worth: {formatCurrency(data?.total_balance)}
        </h1>
      </div>
    </div>
  );
};

export default AccountsTotalBalance;
