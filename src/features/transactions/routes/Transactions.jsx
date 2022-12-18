import { Layout } from "@/components/Layout";

import { TransactionsList } from "../components/TransactionsList";
import { useTransactions } from "../hooks/useTransactions";
import { useUnallocatedTransactions } from "../hooks/useUnallocatedTransactions";

const Transactions = () => {
  const unallocatedQuery = useUnallocatedTransactions();
  const transactionsQuery = useTransactions();

  return (
    <Layout title="Transactions">
      <TransactionsList
        title="Unallocated"
        transactions={unallocatedQuery.data?.transactions}
        isLoading={unallocatedQuery.isLoading}
        error={unallocatedQuery.error}
      />
      <TransactionsList
        title="All Transactions"
        transactions={transactionsQuery.data?.transactions}
        isLoading={transactionsQuery.isLoading}
        error={transactionsQuery.error}
      />
    </Layout>
  );
};

export default Transactions;
