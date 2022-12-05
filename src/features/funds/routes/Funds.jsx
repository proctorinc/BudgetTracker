import { useHistory } from "react-router-dom";
import { Button } from "@/components/Elements/Button";
import FundsChart from "../components/FundsChart";
import FundsList from "../components/FundsList";

const Funds = () => {
  const history = useHistory();
  return (
    <>
      <FundsChart />
      <FundsList />
      <Button text="New Fund" onClick={() => history.push("/funds/create")} />
    </>
  );
};

export default Funds;
