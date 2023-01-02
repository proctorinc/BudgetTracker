import { useNavigate, useParams } from "react-router-dom";

import { DetailLayout } from "@/components/Layout";
import { formatCurrency } from "@/utils/currency";
import { AnimatedList } from "@/components/Elements/AnimatedList";
import { TransactionsList, useFundTransactions } from "@/features/transactions";
import { ProgressBar } from "@/components/Charts/ProgressBar";
import { Button } from "@/components/Elements/Button";

import { deleteFund } from "../api/deleteFund";
import { useFund } from "../hooks/useFund";

const Fund = () => {
  const navigate = useNavigate();
  const { fundId } = useParams();
  const fundQuery = useFund({ fundId });

  if (fundQuery.error) {
    return <div>{error}</div>;
  }

  const fund = fundQuery.data?.fund;

  const handleDelete = () => {
    deleteFund({ id: fund._id })
      .catch((err) => console.log(err))
      .then(() => {
        navigate("/funds");
      });
  };

  return (
    <DetailLayout
      title={formatCurrency(fund?.amount)}
      subtitle={fund?.name}
      subtitleIcon={fund?.icon}
      isLoading={fundQuery.isLoading}
    >
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
        <div className="flex justify-center gap-2">
          <Button text="Delete" onClick={handleDelete} />
          <Button text="Transfer" />
        </div>
      </AnimatedList>
      <TransactionsList
        title="Transactions"
        useHook={useFundTransactions}
        hookParameters={[fundId]}
      />
    </DetailLayout>
  );
};

export default Fund;
