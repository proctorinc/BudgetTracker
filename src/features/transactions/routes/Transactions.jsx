import { useState } from "react";

import { Button } from "@/components/Elements/Button";
import { Layout } from "@/components/Layout";

import { TransactionsList } from "../components/TransactionsList";
import { useTransactions } from "../hooks/useTransactions";
import { useUnallocatedTransactions } from "../hooks/useUnallocatedTransactions";

const Transactions = () => {
  const [selected, setSelected] = useState("all");

  return (
    <Layout title="Transactions">
      <div className="flex justify-center gap-10 pb-5">
        <Button
          text="Unallocated"
          style={selected === "unallocated" ? null : "ghost"}
          onClick={() => setSelected("unallocated")}
        />
        <Button
          text="All Transactions"
          style={selected === "all" ? null : "ghost"}
          onClick={() => setSelected("all")}
        />
      </div>
      {selected === "all" ? (
        <TransactionsList title="All Transactions" useHook={useTransactions} />
      ) : (
        <TransactionsList
          title="Unallocated"
          useHook={useUnallocatedTransactions}
        />
      )}
    </Layout>
  );
};

export default Transactions;
