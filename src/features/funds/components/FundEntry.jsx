import { formatCurrency } from "@/utils/currency";

const FundEntry = ({ fund }) => {
  return (
    <div className="flex border border-gray-600 px-4 py-2 rounded-lg">
      <div>
        <p className="text-2xl">{fund.name}</p>
      </div>
      <div className="flex justify-end flex-grow">
        <p className="text-3xl">{formatCurrency(fund.initial_balance)}</p>
      </div>
    </div>
  );
};

export default FundEntry;
