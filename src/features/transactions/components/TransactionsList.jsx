import { useState, useEffect } from "react";

import { AnimatedList } from "@/components/Elements/AnimatedList";
import { Button } from "@/components/Elements/Button";

import TransactionEntry from "./TransactionEntry";

export const TransactionsList = ({ title, useHook, hookParameters = [] }) => {
  const [page, setPage] = useState(1);
  const [transactions, setTransactions] = useState([]);
  const transactionsQuery = useHook(page, ...hookParameters);
  const hasNextPage = transactionsQuery.data?.has_next;

  console.log(transactionsQuery.data);

  useEffect(() => {
    if (!transactionsQuery.isLoading) {
      setTransactions([
        ...transactions,
        ...transactionsQuery.data.transactions,
      ]);
    }
  }, [transactionsQuery.data]);

  const handleNextPage = () => {
    setPage(transactionsQuery.data.next_page);
  };

  if (transactionsQuery.error) {
    return <div>Error: {error}</div>;
  }

  const transactionEntries = transactions?.map((transaction) => (
    <TransactionEntry key={transaction._id} transaction={transaction} />
  ));

  return (
    <div className="pb-10">
      <h2 className="text-3xl pb-2">{title}</h2>
      <AnimatedList>{transactionEntries}</AnimatedList>
      {hasNextPage && (
        <div className="flex w-full justify-center p-3">
          <Button
            style="ghost"
            text="Next transactions"
            onClick={handleNextPage}
            disabled={transactionsQuery.isLoading}
          />
        </div>
      )}
    </div>
  );
};
