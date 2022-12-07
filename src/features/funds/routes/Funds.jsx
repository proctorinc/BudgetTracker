import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Elements/Button";
import FundsChart from "../components/FundsChart";
import FundsList from "../components/FundsList";
import AccountsTotalBalance from "../../accounts/components/AccountsTotalBalance";
import useFunds from "../hooks/useFunds";
import { MainLayout } from "@/components/Layout";

const Funds = () => {
  const navigate = useNavigate();
  const { funds, isLoading } = useFunds();

  if (isLoading) {
    return (
    <div className="flex justify-center align-center items-center w-screen h-screen">
      Loading...
    </div>
    );
  }

  return (
    <MainLayout>
      <AccountsTotalBalance />
      <FundsChart funds={funds} />
      <FundsList funds={funds} />
      <div className="flex justify-center p-5">
        <Button text="New Fund" onClick={() => navigate("/funds/create")} />
      </div>
    </MainLayout>
  );
};

export default Funds;
