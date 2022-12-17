import { Loader } from "@/components/Elements/Loader";
import { MainLayout } from "@/components/Layout";
import { formatCurrency } from "@/utils/currency";
import { useParams } from "react-router-dom";
import MerchantDetail from "../components/detail/MerchantDetail";
import SourceDetail from "../components/detail/SourceDetail";
import useTransaction from "../hooks/useTransaction";

const Transaction = () => {
  const { transactionId } = useParams();
  const { data, isLoading, error } = useTransaction({ transactionId });
  const transaction = data?.transaction;

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const categories = transaction.category.map((category, i) => {
    return <p key={i}>{category}</p>;
  });

  return (
    <MainLayout>
      <div className="flex flex-col items-center gap-1 py-5">
        <h1 className="text-6xl">{formatCurrency(transaction.amount)}</h1>
        <h3>{transaction.merchant_name}</h3>
        <div className="flex gap-2 border border-gray-600 rounded-md px-3">
          {categories}
        </div>
        <p>{new Date(transaction.date).toLocaleString()}</p>

        {transaction.pending && (
          <p className="border border-gray-600 rounded-md p-1 font-thin">
            Transaction is pending
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <MerchantDetail merchant={transaction.merchant_name} />
        <SourceDetail source={transaction.source} />
      </div>
    </MainLayout>
  );
};

export default Transaction;
