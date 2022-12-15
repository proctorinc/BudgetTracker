import { formatCurrency } from "@/utils/currency";
import { useAccounts } from "../hooks/useAccounts";

const AccountsTotalBalance = () => {
  const { data } = useAccounts();

  return (
    <div className="flex justify-center p-4">
      <h1 className="text-3xl">
        Net Worth: {formatCurrency(data?.total_balance)}
      </h1>
    </div>
  );
};

export default AccountsTotalBalance;
