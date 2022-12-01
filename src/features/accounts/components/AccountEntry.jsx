import { formatCurrency } from "../../../utils/currency";

const AccountEntry = ({ account }) => {
  return (
    <div className="border border-gray-600 p-4 m-2 rounded-lg">
      <p className="text-2xl">{account.name}</p>
      <p className="text-md">Type: {account.subtype}</p>
      <p className="text-3xl pt-2">
        {formatCurrency(account.balances.current)}
      </p>
    </div>
  );
};

export default AccountEntry;
