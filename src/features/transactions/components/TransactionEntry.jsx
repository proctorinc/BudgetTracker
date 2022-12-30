import { useNavigate } from "react-router-dom";
import { PlusCircle } from "phosphor-react";

import { AnimatedCard } from "@/components/Elements/AnimatedCard";
import { formatCurrency } from "@/utils/currency";
import { capitalizeFirstLetter } from "@/utils";

const TransactionEntry = ({ transaction }) => {
  const navigate = useNavigate();
  const source = transaction.source;
  // const sourceQuery = useTransactionSource({ source });

  const handleClick = () => {
    navigate(`/transactions/${transaction._id}`);
  };

  const date = new Date(transaction.date);
  const formattedDate = date.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  const amount = formatCurrency(transaction.amount);

  return (
    <AnimatedCard onClick={handleClick}>
      <div className="overflow-hidden">
        <p className="text-lg truncate">{transaction.name}</p>
        <p className="text-xs text-gray-400">
          {source.type
            ? `${capitalizeFirstLetter(source.type)} / ${source.name}`
            : "Unallocated"}
        </p>
      </div>
      <div className="flex justify-end flex-grow items-center">
        <div className="text-right">
          <p className="text-lg">{amount}</p>
          <p className="text-xs text-gray-400">{formattedDate}</p>
        </div>
      </div>
      {source.type === null && (
        <div className="pl-2">
          <PlusCircle size={25} weight="light" />
        </div>
      )}
    </AnimatedCard>
  );
};

export default TransactionEntry;
