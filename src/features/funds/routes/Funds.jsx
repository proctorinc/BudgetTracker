import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Elements/Button";
import FundsChart from "../components/FundsChart";
import FundsList from "../components/FundsList";

const Funds = () => {
  const navigateTo = useNavigate();
  return (
    <>
      <FundsChart />
      <FundsList />
      <Button text="New Fund" onClick={() => navigateTo("/funds/create")} />
    </>
  );
};

export default Funds;
