import { useParams } from "react-router-dom";

import { Loader } from "@/components/Elements/Loader";
import { Layout } from "@/components/Layout";
import { formatCurrency } from "@/utils/currency";
import { AnimatedDetailHeader } from "@/components/Elements/AnimatedDetailHeader";
import { AnimatedList } from "@/components/Elements/AnimatedList";
import { AnimatedCard } from "@/components/Elements/AnimatedCard";
import { TransactionsList, useFundTransactions } from "@/features/transactions";

import { useFund } from "../hooks/useFund";
import { ProgressBar } from "@/components/Charts/ProgressBar";
import { Button } from "@/components/Elements/Button";

const Fund = () => {
  const { fundId } = useParams();
  const fundQuery = useFund({ fundId });
  const transactionsQuery = useFundTransactions({ fundId });

  if (fundQuery.isLoading || !fundId) {
    return <Loader />;
  }

  if (fundQuery.error) {
    return <div>{error}</div>;
  }

  const fund = fundQuery.data.fund;

  return (
    <Layout back>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center gap-1">
          <AnimatedDetailHeader
            icon={fund.icon}
            title={formatCurrency(fund.initial_amount)}
            subtitle={fund.name}
          />
        </div>
        <AnimatedList>
          <div className="flex justify-center gap-2 border bg-gray-200 border-gray-200 p-3 rounded-md">
            <div className="w-full text-center pb-5">
              <h3 className="pb-2">Goal: $10,000</h3>
              <ProgressBar percentageComplete={20} color={"bg-gray-600"} />
            </div>
          </div>
          <div className="flex justify-center gap-2 border bg-gray-200 border-gray-200 p-3 rounded-md">
            <div className="w-full text-center py-10">Line chart goes here</div>
          </div>
          <div className="flex justify-center p-3">
            <Button text="Transfer" />
          </div>
        </AnimatedList>
        <TransactionsList
          title="Transactions"
          transactions={transactionsQuery.data.transactions}
          isLoading={transactionsQuery.isLoading}
          error={transactionsQuery.error}
        />
      </div>
    </Layout>
  );
};

export default Fund;
