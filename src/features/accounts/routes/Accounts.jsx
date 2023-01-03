import { Question } from "phosphor-react";

import { LinkBankButton } from "@/features/plaid";
import { Layout } from "@/components/Layout";
import { formatCurrency } from "@/utils/currency";
import { Tooltip } from "@/components/Elements/Tooltip";

import AccountList from "../components/AccountList";
import { useAccounts } from "../hooks/useAccounts";

const Accounts = () => {
  const accountsQuery = useAccounts();
  const netWorth = formatCurrency(accountsQuery.data?.total_balance);

  const totalTooltip = (
    <>
      <span className="text-md">
        Net Worth = Total Assets - Total Liabilities
      </span>
      <span className="text-md">Assets = Cash + Investments</span>
      <span className="text-md">Liabilities = Credit + Loans</span>
    </>
  );

  const subtitle = (
    <div className="flex items-center gap-2">
      Net Worth: {netWorth}
      <Tooltip content={totalTooltip}>
        <Question size={20} className="text-gray-500" />
      </Tooltip>
    </div>
  );

  return (
    <Layout
      title="Accounts"
      subtitle={subtitle}
      isLoading={accountsQuery.isLoading}
    >
      <AccountList
        accounts={accountsQuery.data}
        isLoading={accountsQuery.isLoading}
        error={accountsQuery.error}
      />
      <LinkBankButton />
    </Layout>
  );
};

export default Accounts;
