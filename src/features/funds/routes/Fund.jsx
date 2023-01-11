import { useNavigate, useParams } from "react-router-dom";

import { DetailLayout } from "@/components/Layout";
import { formatCurrency } from "@/utils/currency";
import { TransactionsList, useFundTransactions } from "@/features/transactions";
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
      <div className="flex justify-center gap-2">
        <Button text="Delete" onClick={handleDelete} />
        <Button text="Allocate" />
      </div>
      <TransactionsList
        title="Transactions"
        useHook={useFundTransactions}
        hookParameters={[fundId]}
      />
    </DetailLayout>
  );
};

export default Fund;
