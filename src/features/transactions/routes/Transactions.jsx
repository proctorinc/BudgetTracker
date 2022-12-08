import TransactionsList from "../components/TransactionsList";
import useTransactions from "../hooks/useTransactions";

const Transactions = () => {
  const { unallocated, allocated, isLoading, error } = useTransactions();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h3 className="text-3xl">Unallocated:</h3>
      <TransactionsList transactions={unallocated} />
      <h3 className="text-3xl">Allocated:</h3>
      <TransactionsList transactions={allocated} />
    </>
  );
};

export default Transactions;
