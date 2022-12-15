import { formatCurrency } from "@/utils/currency";

const AccountEntry = ({ account, loading }) => {
  return (
    <div className="flex border border-gray-600 px-4 py-2 rounded-lg hover:bg-gray-200">
      <div>
        <p className="text-2xl">{account.name}</p>
        <p className="text-md">
          {account.subtype} - {account.mask}
        </p>
      </div>
      <div className="flex justify-end flex-grow">
        <p className="text-3xl">{formatCurrency(account.balances.current)}</p>
      </div>
    </div>
  );
};

export default AccountEntry;
