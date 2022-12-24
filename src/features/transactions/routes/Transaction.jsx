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

  const date = new Date(transaction.date);

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
          <TransactionUpdateDetail
            label={"Date"}
            icon={<Calendar size={25} weight="fill" />}
            onClick={() => console.log("Clicked on date detail")}
          >
            <p>{date.toDateString()}</p>
          </TransactionUpdateDetail>
          <TransactionUpdateDetail
            label={"Notes"}
            icon={<Note size={25} weight="fill" />}
            onClick={() => console.log("Clicked on notes detail")}
          >
            <p>None</p>
          </TransactionUpdateDetail>
          <TransactionUpdateDetail
            label={"Mark as Transfer"}
            icon={<ArrowsClockwise size={25} weight="fill" />}
            onClick={() => console.log("Clicked on split transaction detail")}
          >
            <p>Imagine a toggle here</p>
          </TransactionUpdateDetail>
          <TransactionUpdateDetail
            label={"Split Transaction"}
            icon={<GitFork size={25} weight="fill" />}
            onClick={() => console.log("Clicked on split transaction detail")}
            actionItem={<CaretRight size={25} weight="bold" />}
          >
            <p>Split</p>
          </TransactionUpdateDetail>
        </AnimatedList>
      </div>
    </Layout>
  );
};

export default Transaction;
