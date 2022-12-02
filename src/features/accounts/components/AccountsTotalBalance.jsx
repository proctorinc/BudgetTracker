import useAccounts from "../../../hooks/useAccounts";
import { formatCurrency } from "../../../utils/currency";

const AccountsTotalBalance = () => {
  const { totalBalance } = useAccounts();

  return (
    <div className="border border-gray-600 p-4 rounded-lg">
      <h1 className="text-3xl">
        Total Balance: {formatCurrency(totalBalance)}
      </h1>
    </div>
  );
};

export default AccountsTotalBalance;
