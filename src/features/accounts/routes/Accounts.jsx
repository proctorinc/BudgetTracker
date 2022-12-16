import { MainLayout } from "@/components/Layout";
import AccountList from "../components/AccountList";

const Accounts = () => {
  return (
    <MainLayout>
      <h1 className="text-6xl font-bold py-5">Accounts</h1>
      <AccountList />
    </MainLayout>
  );
};

export default Accounts;
