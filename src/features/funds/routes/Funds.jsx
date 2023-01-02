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
  console.log(fundsQuery.data);
  const funds = fundsQuery.data?.funds;
  const fundsTotal = formatCurrency(fundsQuery.data?.total);
  const unallocatedTotal = formatCurrency(fundsQuery.data?.unallocated);
  const allocationData = [
    {
      name: "unallocated",
      amount: fundsQuery.data?.unallocated,
    },
    {
      name: "allocated",
      amount: fundsQuery.data?.total - fundsQuery.data?.unallocated,
    },
  ];
  console.log(allocationData);
  console.log(funds);
  console.log(`Unallocated: ${fundsQuery.data?.unallocated}`);
  console.log(`Total: ${fundsQuery.data?.total}`);
  console.log(
    `Allocated: ${fundsQuery.data?.total - fundsQuery.data?.unallocated}`
  );

  return (
    <Layout
      title="Funds"
      subtitle={`Total: ${fundsTotal}`}
      isLoading={fundsQuery.isLoading}
    >
      <div className="relative">
        <FundsChart className="mr-32 mb-5" funds={funds} />
        <FundsChart
          className="absolute right-5 bottom-0 w-40"
          funds={allocationData}
          size="sm"
          title="100%"
        />
      </div>
      <FundsList funds={funds} error={fundsQuery.error} />
      <div className="flex justify-center p-5">
        <Button text="New Fund" onClick={() => navigate("/funds/create")} />
      </div>
    </Layout>
  );
};

export default Funds;
