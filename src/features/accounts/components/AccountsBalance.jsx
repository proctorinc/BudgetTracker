import useAccounts from "../../../hooks/useAccounts";
import { formatCurrency } from "../../../utils/currency";

const AccountsBalance = () => {
  const { totalBalance } = useAccounts();

  return (
    <div className="border border-gray-600 p-4 m-2 rounded-lg">
      <h1 className="text-3xl">
        Total Balance: {formatCurrency(totalBalance)}
      </h1>
    </div>
  );
};

export default AccountsBalance;
