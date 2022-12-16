import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Elements/Button";
import FundsChart from "../components/FundsChart";
import FundsList from "../components/FundsList";
import AccountsTotalBalance from "../../accounts/components/AccountsTotalBalance";
import { useFunds } from "../hooks/useFunds";
import { MainLayout } from "@/components/Layout";
import { MainNav } from "@/components/Navbar/MainNav";

const Funds = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useFunds();

  if (isLoading) {
    return (
      <div className="flex justify-center align-center items-center w-screen h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <MainNav />
      <MainLayout>
        <h1 className="text-6xl font-bold py-5">Funds</h1>
        {/* <FundsChart funds={data.funds} /> */}
        <AccountsTotalBalance />
        <FundsList funds={data.funds} />
        <div className="flex justify-center p-5">
          <Button text="New Fund" onClick={() => navigate("/funds/create")} />
        </div>
      </MainLayout>
    </>
  );
};

export default Funds;
