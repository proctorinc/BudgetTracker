import { Layout } from "@/components/Layout";
import LinkBankButton from "@/features/bank_link/components/LinkBankButton";
import AccountList from "../components/AccountList";
import AccountsTotalBalance from "../components/AccountsTotalBalance";

const Accounts = () => {
  return (
    <Layout title="Accounts">
      <AccountsTotalBalance />
      <AccountList />
      <div className="flex justify-center p-5">
        <LinkBankButton />
      </div>
    </Layout>
  );
};

export default Accounts;
