import { Loader } from "@/components/Elements/Loader";

import TransactionsList from "../components/TransactionsList";
import { useAllocatedTransactions } from "../hooks/useAllocatedTransactions";
import { useUnallocatedTransactions } from "../hooks/useUnallocatedTransactions";

const Transactions = () => {
  const allocatedQuery = useAllocatedTransactions();
  const unallocatedQuery = useUnallocatedTransactions();

  const isLoading = allocatedQuery.isLoading || unallocatedQuery.isLoading;
  const error = allocatedQuery.error || unallocatedQuery.error;

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h3 className="text-3xl">Unallocated:</h3>
      <TransactionsList transactions={unallocatedQuery.data.transactions} />
      <h3 className="text-3xl">Allocated:</h3>
      <TransactionsList transactions={allocatedQuery.data.transactions} />
    </>
  );
};

export default Transactions;
