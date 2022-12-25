import { useState } from "react";

import { Layout } from "@/components/Layout";

import { TransactionsList } from "../components/TransactionsList";
import { useTransactions } from "../hooks/useTransactions";
import { useUnallocatedTransactions } from "../hooks/useUnallocatedTransactions";

const Transactions = () => {
  return (
    <Layout title="Transactions">
      <TransactionsList
        title="Unallocated"
        useHook={useUnallocatedTransactions}
      />
      <TransactionsList title="All Transactions" useHook={useTransactions} />
    </Layout>
  );
};

export default Transactions;
