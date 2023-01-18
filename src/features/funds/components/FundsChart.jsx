import { useMemo } from "react";
import { PieChart } from "@/components/Charts/PieChart";
import { formatPercent } from "@/utils";

const FundsChart = ({ funds, allocated, unallocated, className }) => {
  const fundData = useMemo(
    () =>
      funds
        .filter((fund) => fund.amount > 0)
        .map((fund, index) => {
          if (fund.amount > 0) {
            return {
              id: fund.name,
              value: fund.amount,
            };
          }
        }),
    [funds]
  );
  const percentAllocated = formatPercent(allocated, unallocated);
  const allocationData = [
    {
      id: "unallocated",
      value: unallocated,
    },
    {
      id: "allocated",
      value: allocated,
    },
  ];

  return (
    <div
      className={`${className} relative w-full sm:mt-0 -mt-10 -mb-5 sm:mb-0`}
    >
      <PieChart className="mr-32 mb-5 sm:-ml-10" data={fundData} />
      <div className="flex absolute sm:right-5 right-0 bottom-0 w-2/5">
        <PieChart
          className="w-full"
          data={allocationData}
          size="sm"
          labels={false}
          title={percentAllocated}
        />
      </div>
    </div>
  );
};

export default FundsChart;
