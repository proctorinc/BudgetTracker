import { Layout } from "@/components/Layout";
import LinkBankButton from "@/features/bank_link/components/LinkBankButton";
import { formatCurrency } from "@/utils/currency";
import AccountList from "../components/AccountList";
import { useAccounts } from "../hooks/useAccounts";

const Accounts = () => {
  const accountsQuery = useAccounts();

  const netWorth = formatCurrency(accountsQuery.data.total_balance);

  return (
    <Layout title="Accounts" subtitle={`${netWorth}`}>
      <AccountList />
      <div className="flex justify-center p-5">
        <LinkBankButton />
      </div>
    </Layout>
  );
};

export default Accounts;
