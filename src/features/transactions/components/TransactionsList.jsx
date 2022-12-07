import TransactionEntry from "./TransactionEntry";

const TransactionsList = ({ transactions }) => {
  const transactionEntries = transactions.map((transaction) => {
    <TransactionEntry key={transaction._id} transaction={transaction} />;
  });

  return (
    <>
      <h3 className="text-3xl">Transactions:</h3>
      <div className="flex flex-col gap-2 pt-5">{transactionEntries}</div>
    </>
  );
};

export default TransactionsList;
