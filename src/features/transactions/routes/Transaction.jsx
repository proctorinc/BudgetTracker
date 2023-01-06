import { useState } from "react";
import { useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { AnimatedList } from "@/components/Elements/AnimatedList";
import { DetailLayout } from "@/components/Layout";
import { Modal } from "@/components/Elements/Modal";
import { formatCurrency } from "@/utils/currency";

import MerchantDetail from "../components/detail/MerchantDetail";
import SourceDetail from "../components/detail/SourceDetail";
import { useTransaction } from "../hooks/useTransaction";
import NotesDetail from "../components/detail/NotesDetail";
import DateDetail from "../components/detail/DateDetail";
import TransferDetail from "../components/detail/TransferDetail";
import SplitDetail from "../components/detail/SplitDetail";
import { useUpdateTransaction } from "../hooks/useUpdateTransaction";

const Transaction = () => {
  const { transactionId } = useParams();
  const [selectedDetail, setSelectedDetail] = useState("");
  const transactionsQuery = useTransaction({ transactionId });
  const transaction = transactionsQuery.data?.transaction;
  // const accountQuery = useAccount({ accountId: transaction?.account_id });
  const updateTransactionMutation = useUpdateTransaction({ transactionId });
  const date = new Date(transaction?.date);
  const month = date.getMonth();
  const year = date.getFullYear();

  if (transactionsQuery.error) {
    return <div>Error: {error}</div>;
  }

  const categories = transaction?.category.map((category, i) => {
    return <p key={i}>{category}</p>;
  });

  const updateTransactionDetail = async (updateItems) => {
    await updateTransactionMutation
      .mutateAsync({ ...updateItems })
      .then((result) => console.log(result))
      .catch((err) => console.log(err))
      .finally(() => setSelectedDetail(null));
  };

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
          <SourceDetail
            source={transaction?.source}
            setSelected={setSelectedDetail}
            month={month}
            year={year}
            onUpdate={updateTransactionDetail}
          />
          <DateDetail date={transaction?.date} />
          <NotesDetail
            note={transaction?.note}
            setSelected={setSelectedDetail}
            onUpdate={updateTransactionDetail}
          />
          <TransferDetail
            isTransfer={transaction?.is_transfer}
            onUpdate={updateTransactionDetail}
          />
          <SplitDetail
            setSelected={setSelectedDetail}
            onUpdate={updateTransactionDetail}
          />
        </AnimatedList>
        <AnimatePresence>
          {selectedDetail && (
            <Modal onClose={() => setSelectedDetail(null)}>
              {selectedDetail}
            </Modal>
          )}
        </AnimatePresence>
      </div>
    </DetailLayout>
  );
};

export default Transaction;
