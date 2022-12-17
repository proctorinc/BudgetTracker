import { MainLayout } from "@/components/Layout";
import LinkBankButton from "@/features/bank_link/components/LinkBankButton";
import AccountList from "../components/AccountList";

const Accounts = () => {
  return (
    <MainLayout title="Accounts">
      <AccountList />
      <div className="flex justify-center p-5">
        <LinkBankButton />
      </div>
    </MainLayout>
  );
};

export default Accounts;
