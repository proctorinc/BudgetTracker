import { useParams } from "react-router-dom";
import {
  Note,
  Calendar,
  ArrowsClockwise,
  GitFork,
  CaretRight,
} from "phosphor-react";

import { AnimatedDetailHeader } from "@/components/Elements/AnimatedDetailHeader";
import { AnimatedList } from "@/components/Elements/AnimatedList";
import { Loader } from "@/components/Elements/Loader";
import { Layout } from "@/components/Layout";
import { formatCurrency } from "@/utils/currency";

import MerchantDetail from "../components/detail/MerchantDetail";
import SourceDetail from "../components/detail/SourceDetail";
import { useTransaction } from "../hooks/useTransaction";
import TransactionUpdateDetail from "../components/detail/TransactionDetail";
import NotesDetail from "../components/detail/NotesDetail";
import DateDetail from "../components/detail/DateDetail";
import TransferDetail from "../components/detail/TransferDetail";
import SplitDetail from "../components/detail/SplitDetail";

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
    <Layout back={true}>
      <div className="flex flex-col items-center gap-1 py-5">
        <AnimatedDetailHeader
          title={formatCurrency(transaction.amount)}
          subtitle={
            transaction.merchant_name
              ? transaction.merchant_name
              : transaction.name
          }
        />
        <div className="flex gap-2 bg-gray-200 text-gray-500 rounded-md px-3">
          {categories}
        </div>

        {transaction.pending && (
          <p className="rounded-md p-1 font-thin">Transaction is pending</p>
        )}
      </div>
      <div className="sm:px-10">
        <AnimatedList>
          <MerchantDetail merchant={transaction.merchant_name} />
          <SourceDetail source={transaction.source} />
          <DateDetail date={transaction.date} />
          <NotesDetail note={transaction.note} />
          <TransferDetail />
          <SplitDetail />
        </AnimatedList>
      </div>
    </Layout>
  );
};

export default Transaction;
