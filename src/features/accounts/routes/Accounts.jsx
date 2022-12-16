import { MainLayout } from "@/components/Layout";
import { MainNav } from "@/components/Navbar/MainNav";
import AccountList from "../components/AccountList";
import AccountsTotalBalance from "../components/AccountsTotalBalance";

const Accounts = () => {
  return (
    <>
      <MainNav />
      <MainLayout>
        <h1 className="text-6xl font-bold py-5">Accounts</h1>
        <AccountsTotalBalance />
        <AccountList />
      </MainLayout>
    </>
  );
};

export default Accounts;
