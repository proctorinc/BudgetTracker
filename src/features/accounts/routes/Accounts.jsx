import { Question } from "phosphor-react";

import { Layout } from "@/components/Layout";
import LinkBankButton from "@/features/bank_link/components/LinkBankButton";
import { formatCurrency } from "@/utils/currency";
import { Tooltip } from "@/components/Elements/Tooltip";

import AccountList from "../components/AccountList";
import { useAccounts } from "../hooks/useAccounts";

const Accounts = () => {
  const accountsQuery = useAccounts();
  const netWorth = formatCurrency(accountsQuery.data?.total_balance);

  const totalTooltip = (
    <>
      <span className="text-md">Total = Total Assets - Total Liabilities</span>
      <span className="text-md">Assets = Cash + Investments</span>
      <span className="text-md">Liabilities = Credit + Loans</span>
    </>
  );

  const subtitle = (
    <div className="flex items-center gap-2">
      Total: {netWorth}
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
      <AccountList accounts={accountsQuery.data} error={accountsQuery.error} />
      <div className="flex justify-center p-5">
        <LinkBankButton />
      </div>
    </Layout>
  );
};

export default Accounts;
