import { TransactionsList } from "../components/TransactionsList";
import { useUnallocatedTransactions } from "../hooks/useUnallocatedTransactions";

const AllocateTransactions = () => {
  const { sourceId } = useParams();
  //   const sourceQuery = useSource({ sourceId });

  return (
    <TransactionsList
      title="Unallocated"
      useHook={useUnallocatedTransactions}
    />
  );
};

export default AllocateTransactions;
