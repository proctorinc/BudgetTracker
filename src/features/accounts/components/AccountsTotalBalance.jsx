import { formatCurrency } from "@/utils/currency";
import useAccounts from "../hooks/useAccounts";

const AccountsTotalBalance = () => {
  const { netBalance } = useAccounts();

  return (
    <div className="border border-gray-600 p-4 rounded-lg">
      <h1 className="text-3xl">Net Worth: {formatCurrency(netBalance)}</h1>
    </div>
  );
};

export default AccountsTotalBalance;
