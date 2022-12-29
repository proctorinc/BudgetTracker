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
  const fundsTotal = formatCurrency(fundsQuery.data?.total);
  const unallocatedTotal = formatCurrency(fundsQuery.data?.unallocated);
  const unallocatedData = {
    name: "unallocated",
    initial_amount: fundsQuery.data?.unallocated,
  };
  const chartData = funds ? [...funds, unallocatedData] : [];

  return (
    <Layout
      title="Funds"
      subtitle={`Total: ${fundsTotal}`}
      isLoading={fundsQuery.isLoading}
    >
      <FundsChart funds={chartData} />
      <div className="flex gap-2 py-2 text-xl items-center w-full">
        <h2 className="text-3xl">Unallocated: {unallocatedTotal}</h2>
      </div>
      <FundsList funds={funds} error={fundsQuery.error} />
      <div className="flex justify-center p-5">
        <Button text="New Fund" onClick={() => navigate("/funds/create")} />
      </div>
    </Layout>
  );
};

export default Funds;
