import { AnimatedList } from "@/components/Elements/AnimatedList";
import { Loader } from "@/components/Elements/Loader";
import TransactionEntry from "./TransactionEntry";

const TransactionsList = ({ transactions, title, isLoading, error }) => {
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const transactionEntries = transactions.map((transaction) => (
    <TransactionEntry key={transaction._id} transaction={transaction} />
  ));

  return (
    <>
      <h2 className="text-3xl font-extrabold pt-10 pb-2">{title}</h2>
      <AnimatedList>{transactionEntries}</AnimatedList>
    </>
  );
};

export default TransactionsList;
