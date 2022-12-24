import { useParams } from "react-router-dom";

import { AnimatedDetailHeader } from "@/components/Elements/AnimatedDetailHeader";
import { Loader } from "@/components/Elements/Loader";
import { Layout } from "@/components/Layout";
import {
  TransactionsList,
  useAccountTransactions,
} from "@/features/transactions";
import { formatCurrency } from "@/utils/currency";
import { capitalizeFirstLetter } from "@/utils";

import { useAccount } from "../hooks/useAccount";

const Account = () => {
  const { accountId } = useParams();
  const accountQuery = useAccount({ accountId });
  const transactionsQuery = useAccountTransactions({ accountId });

  if (accountQuery.isLoading) {
    return <Loader />;
  }

  if (accountQuery.error) {
    return <div>Error loading account</div>;
  }

  const account = accountQuery.data;

  return (
    <Layout>
      <div className="flex flex-col items-center gap-1 py-5">
        <AnimatedDetailHeader
          title={formatCurrency(account.balances.current)}
          subtitle={account.name}
          back
        />
        {account.official_name && (
          <div className="flex gap-2 border border-gray-200 bg-gray-200 text-gray-500 rounded-md px-3">
            {account.official_name}
          </div>
        )}
        <p>
          {account.type === "depository"
            ? "Cash"
            : capitalizeFirstLetter(account.type)}{" "}
          {">"} {capitalizeFirstLetter(account.subtype)} {">"} Account (...
          {account.mask})
        </p>
        {account.available && <p>Available: {account.available}</p>}
      </div>
      <TransactionsList
        title="Transactions"
        transactions={transactionsQuery.data}
        isLoading={transactionsQuery.isLoading}
        error={transactionsQuery.error}
      />
    </Layout>
  );
};

export default Account;
