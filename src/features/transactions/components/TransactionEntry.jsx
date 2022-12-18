import { AnimatedCard } from "@/components/Elements/AnimatedCard";
import { formatCurrency } from "@/utils/currency";
import { useNavigate } from "react-router-dom";

const TransactionEntry = ({ transaction }) => {
  const navigate = useNavigate();
  const sourceType = transaction.source.type;

  const handleClick = () => {
    navigate(`/transactions/${transaction._id}`);
  };

  return (
    <AnimatedCard onClick={handleClick}>
      <div className="flex justify-between w-full">
        <p>{transaction.name}</p>
        <p>{formatCurrency(transaction.amount)}</p>
        {sourceType && <p>{sourceType}</p>}
        <p>{new Date(transaction.date).toLocaleDateString()}</p>
      </div>
    </AnimatedCard>
  );
};

export default TransactionEntry;
