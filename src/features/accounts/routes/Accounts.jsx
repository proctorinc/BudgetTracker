import { Layout } from "@/components/Layout";
import LinkBankButton from "@/features/bank_link/components/LinkBankButton";
import AccountList from "../components/AccountList";

const Accounts = () => {
  return (
    <Layout title="Accounts">
      <AccountList />
      <div className="flex justify-center p-5">
        <LinkBankButton />
      </div>
    </Layout>
  );
};

export default Accounts;
