import { formatCurrency } from "@/utils/currency";
import { useParams } from "react-router-dom";
import UpdateMerchant from "../components/UpdateDetail/UpdateMerchant";
import UpdateSource from "../components/UpdateDetail/UpdateSource";
import useTransaction from "../hooks/useTransaction";

const Transaction = () => {
  const { transactionId } = useParams();
  const { transaction, isLoading, error } = useTransaction({ transactionId });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-6xl">{formatCurrency(transaction.amount)}</h1>
        <h3>{transaction.merchant_name}</h3>
        <p>{transaction.date}</p>
        <p>{transaction.category[0]}</p>
        {transaction.pending && (
          <p className="border border-black rounded-md p-1 font-thin">
            Transaction is pending
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <UpdateMerchant merchant={transaction.merchant} />
        <UpdateSource source={transaction.source} />
      </div>
    </>
  );
};

export default Transaction;
