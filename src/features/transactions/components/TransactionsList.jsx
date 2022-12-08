import TransactionEntry from "./TransactionEntry";

const TransactionsList = ({ transactions }) => {
  const transactionEntries = transactions.map((transaction) => (
    <TransactionEntry key={transaction._id} transaction={transaction} />
  ));

  return (
    <>
      <div className="flex flex-col gap-1 pt-5">{transactionEntries}</div>
    </>
  );
};

export default TransactionsList;
