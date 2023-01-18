import { useNavigate } from "react-router-dom";

import { Button } from "@/components/Elements/Button";
import { Layout } from "@/components/Layout";
import { formatCurrency } from "@/utils/currency";

import FundsList from "../components/FundsList";
import { useFunds } from "../hooks/useFunds";
import FundsChart from "../components/FundsChart";

const Funds = () => {
  const navigate = useNavigate();
  const fundsQuery = useFunds();
  const funds = fundsQuery.data?.funds;
  const fundsTotal = formatCurrency(fundsQuery.data?.allocated);

  return (
    <Layout
      title="Funds"
      subtitle={`Total: ${fundsTotal}`}
      isLoading={fundsQuery.isLoading}
    >
      <FundsChart
        funds={funds}
        allocated={fundsQuery.data?.allocated}
        unallocated={fundsQuery.data?.unallocated}
      />
      <FundsList funds={funds} error={fundsQuery.error} />
      <div className="flex justify-center p-5">
        <Button
          className=""
          text="New Fund"
          onClick={() => navigate("/funds/create")}
        />
      </div>
    </Layout>
  );
};

export default Funds;
