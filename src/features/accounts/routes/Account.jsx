import { useParams } from "react-router-dom";

import { DetailLayout } from "@/components/Layout";
import { formatCurrency } from "@/utils/currency";
import { capitalizeFirstLetter } from "@/utils";
import {
  TransactionsList,
  useAccountTransactions,
} from "@/features/transactions";

import { useAccount } from "../hooks/useAccount";

const Account = () => {
  const { accountId } = useParams();
  const accountQuery = useAccount({ accountId });

  if (accountQuery.error) {
    return <div>Error loading account</div>;
  }

  const account = accountQuery.data;

  return (
    <DetailLayout
      title={formatCurrency(account?.balances.current)}
      subtitle={account?.name}
      isLoading={accountQuery.isLoading}
    >
      {account && (
        <div className="flex flex-col items-center gap-1 py-5 -mt-5">
          {account.official_name && (
            <div className="flex gap-2 border border-gray-200 bg-gray-200 text-gray-500 rounded-md px-3 text-center">
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
      )}
      <TransactionsList
        title="Transactions"
        useHook={useAccountTransactions}
        hookParameters={[accountId]}
      />
    </DetailLayout>
  );
};

export default Account;
