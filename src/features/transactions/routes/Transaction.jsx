import { useParams } from "react-router-dom";

import { AnimatedList } from "@/components/Elements/AnimatedList";
import { DetailLayout } from "@/components/Layout";
import { formatCurrency } from "@/utils/currency";
import { useAccount } from "@/features/accounts/hooks/useAccount";

import MerchantDetail from "../components/detail/MerchantDetail";
import SourceDetail from "../components/detail/SourceDetail";
import { useTransaction } from "../hooks/useTransaction";
import NotesDetail from "../components/detail/NotesDetail";
import DateDetail from "../components/detail/DateDetail";
import TransferDetail from "../components/detail/TransferDetail";
import SplitDetail from "../components/detail/SplitDetail";

const Transaction = () => {
  const { transactionId } = useParams();
  const transactionsQuery = useTransaction({ transactionId });
  const transaction = transactionsQuery.data?.transaction;
  const accountQuery = useAccount({ accountId: transaction?.account_id });

  if (transactionsQuery.error) {
    return <div>Error: {error}</div>;
  }

  const categories = transaction?.category.map((category, i) => {
    return <p key={i}>{category}</p>;
  });

  return (
    <DetailLayout
      title={formatCurrency(transaction?.amount)}
      subtitle={
        transaction?.merchant_name
          ? transaction?.merchant_name
          : transaction?.name
      }
      isLoading={transactionsQuery?.isLoading}
    >
      <div className="flex flex-col items-center gap-1 py-5">
        <div className="flex gap-2 bg-gray-200 text-gray-500 rounded-md px-3">
          {categories}
        </div>

        {transaction?.pending && (
          <p className="rounded-md p-1 font-thin">Transaction is pending</p>
        )}
      </div>
      <div className="sm:px-10">
        <AnimatedList>
          <MerchantDetail merchant={transaction?.merchant_name} />
          <SourceDetail source={transaction?.source} />
          <DateDetail date={transaction?.date} />
          <NotesDetail note={transaction?.note} />
          <TransferDetail />
          <SplitDetail />
        </AnimatedList>
      </div>
    </DetailLayout>
  );
};

export default Transaction;
