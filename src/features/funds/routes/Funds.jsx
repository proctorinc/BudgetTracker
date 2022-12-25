import { useNavigate } from "react-router-dom";

import { Button } from "@/components/Elements/Button";
import { Layout } from "@/components/Layout";

import FundsList from "../components/FundsList";
import { useFunds } from "../hooks/useFunds";
import { formatCurrency } from "@/utils/currency";

const Funds = () => {
  const navigate = useNavigate();
  const fundsQuery = useFunds();

  const fundsTotal = formatCurrency(fundsQuery.data?.total);

  return (
    <Layout
      title="Funds"
      subtitle={`Total: ${fundsTotal}`}
      isLoading={fundsQuery.isLoading}
    >
      <FundsList funds={fundsQuery.data?.funds} error={fundsQuery.error} />
      <div className="flex justify-center p-5">
        <Button text="New Fund" onClick={() => navigate("/funds/create")} />
      </div>
    </Layout>
  );
};

export default Funds;
