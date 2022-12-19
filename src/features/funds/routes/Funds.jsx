import { useNavigate } from "react-router-dom";

import { Button } from "@/components/Elements/Button";
import { Layout } from "@/components/Layout";
import { Loader } from "@/components/Elements/Loader";

import FundsChart from "../components/FundsChart";
import FundsList from "../components/FundsList";
import { useFunds } from "../hooks/useFunds";

const Funds = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useFunds();

  return (
    <Layout title="Funds">
      {/* <FundsChart funds={data.funds} /> */}
      <FundsList funds={data?.funds} isLoading={isLoading} error={error} />
      <div className="flex justify-center p-5">
        <Button text="New Fund" onClick={() => navigate("/funds/create")} />
      </div>
    </Layout>
  );
};

export default Funds;
