import { useState } from "react";
import { useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { XCircle } from "phosphor-react";

import { AnimatedList } from "@/components/Elements/AnimatedList";
import { DetailLayout } from "@/components/Layout";
import { formatCurrency } from "@/utils/currency";
import { useAccount } from "@/features/accounts/hooks/useAccount";
import { Button } from "@/components/Elements/Button";

import MerchantDetail from "../components/detail/MerchantDetail";
import SourceDetail from "../components/detail/SourceDetail";
import { useTransaction } from "../hooks/useTransaction";
import NotesDetail from "../components/detail/NotesDetail";
import DateDetail from "../components/detail/DateDetail";
import TransferDetail from "../components/detail/TransferDetail";
import SplitDetail from "../components/detail/SplitDetail";

const Transaction = () => {
  const { transactionId } = useParams();
  const [selectedDetail, setSelectedDetail] = useState("");
  const transactionsQuery = useTransaction({ transactionId });
  const transaction = transactionsQuery.data?.transaction;
  const accountQuery = useAccount({ accountId: transaction?.account_id });
  const date = new Date(transaction?.date);
  const month = date.getMonth();
  const year = date.getFullYear();

  if (transactionsQuery.error) {
    return <div>Error: {error}</div>;
  }

  const categories = transaction?.category.map((category, i) => {
    return <p key={i}>{category}</p>;
  });

  const toggleSelected = (clickedDetail) => {
    setSelectedDetail(selectedDetail === clickedDetail ? null : clickedDetail);
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
          />
          <DateDetail date={transaction?.date} />
          <NotesDetail
            note={transaction?.note}
            setSelected={setSelectedDetail}
          />
          <TransferDetail />
          <SplitDetail setSelected={setSelectedDetail} />
        </AnimatedList>
        <AnimatePresence>
          {selectedDetail && (
            <motion.div
              className="absolute top-0 left-0 flex items-center justify-center w-full h-screen pt-20 backdrop-blur-sm"
              onClick={() => setSelectedDetail(null)}
            >
              <motion.div
                className="p-5 z-50 w-1/2 rounded-md shadow-xl bg-gray-50 text-center font-extralight"
                layoutId={selectedDetail}
                onClick={(event) => event.stopPropagation()}
              >
                <XCircle
                  size={25}
                  className="rounded-full float-right hover:text-gray-500"
                  onClick={() => setSelectedDetail(null)}
                />
                <div className="p-2">{selectedDetail}</div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </DetailLayout>
  );
};

export default Transaction;
