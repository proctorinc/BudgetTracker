import { AnimatedList } from "@/components/Elements/AnimatedList";
import { Loader } from "@/components/Elements/Loader";
import TransactionEntry from "./TransactionEntry";

export const TransactionsList = ({ transactions, title, isLoading, error }) => {
  if (error) {
    return <div>Error: {error}</div>;
  }

  const transactionEntries = transactions?.map((transaction) => (
    <TransactionEntry key={transaction._id} transaction={transaction} />
  ));

  return (
    <div className="pb-10">
      <h2 className="text-3xl pb-2">{title}</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <AnimatedList>{transactionEntries}</AnimatedList>
      )}
    </div>
  );
};
