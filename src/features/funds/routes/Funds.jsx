import { useNavigate } from "react-router-dom";
import { Question } from "phosphor-react";

import { Button } from "@/components/Elements/Button";
import { Layout } from "@/components/Layout";
import { Tooltip } from "@/components/Elements/Tooltip";
import { formatCurrency } from "@/utils/currency";

import FundsList from "../components/FundsList";
import { useFunds } from "../hooks/useFunds";
import FundsChart from "../components/FundsChart";

const Funds = () => {
  const navigate = useNavigate();
  const fundsQuery = useFunds();
  const funds = fundsQuery.data?.funds;
  const fundsTotal = formatCurrency(fundsQuery.data?.allocated);
  const percentAllocated = (
    (fundsQuery.data?.allocated / fundsQuery.data?.unallocated) *
    100
  ).toFixed(0);
  console.log(percentAllocated);
  const allocationData = [
    {
      name: "unallocated",
      amount: fundsQuery.data?.unallocated,
    },
    {
      name: "allocated",
      amount: fundsQuery.data?.allocated,
    },
  ];
  const allocationTooltip = (
    <>
      <span className="text-md">
        Allocated = transactions/transfers sourced to all funds
      </span>
      <span className="text-md">
        Unallocated = total of cash and credit accounts
      </span>
    </>
  );

  return (
    <Layout
      title="Funds"
      subtitle={`Total: ${fundsTotal}`}
      isLoading={fundsQuery.isLoading}
    >
      <div className="relative w-full sm:mt-0 -mt-10 -mb-5">
        <FundsChart className="mr-32 mb-5 sm:-ml-10" funds={funds} />
        <div className="flex absolute sm:right-5 right-0 bottom-0 w-2/5">
          <FundsChart
            className="w-full"
            funds={allocationData}
            size="sm"
            labels={false}
            title={`${percentAllocated}%`}
          />
        </div>
      </div>
      <FundsList funds={funds} error={fundsQuery.error} />
      <div className="flex justify-center p-5">
        <Button text="New Fund" onClick={() => navigate("/funds/create")} />
      </div>
    </Layout>
  );
};

export default Funds;
