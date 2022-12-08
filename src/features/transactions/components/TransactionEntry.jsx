import { formatCurrency } from "@/utils/currency";
import { useNavigate } from "react-router-dom";

const TransactionEntry = ({ transaction }) => {
  const navigate = useNavigate();
  const sourceType = transaction.source.type;

  const handleClick = () => {
    navigate(`/transactions/${transaction._id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="flex justify-between border border-gray-600 px-4 py-1 rounded-lg text-md"
    >
      <p>{transaction.name}</p>
      <p>{formatCurrency(transaction.amount)}</p>
      {sourceType && <p>{sourceType}</p>}
      <p>{new Date(transaction.date).toLocaleDateString()}</p>
    </div>
  );
};

export default TransactionEntry;
