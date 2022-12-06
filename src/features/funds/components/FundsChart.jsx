import { ResponsivePie } from "@nivo/pie";

const FundsChart = ({ funds, unallocatedBalance, isLoading }) => {

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const unallocatedFunds = {
    name: "unallocated",
    initial_amount: unallocatedBalance,
  }

  const data = [unallocatedFunds, ...funds].filter((fund) => fund.initial_amount > 0)
    .map((fund, index) => {
      if (fund.initial_amount > 0) {
        return {
          id: fund.name,
          value: fund.initial_amount,
        };
      }
    });

  return (
    <div className="h-96 w-full">
      <ResponsivePie
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        valueFormat=" >-$,.2f"
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={10}
        colors={{ scheme: "greys" }}
        borderWidth={2}
        borderColor={
          {"from":"color","modifiers":[["darker", 0.2]]}
        }
        enableArcLinkLabels={false}
        onClick={(node, event) => console.log(node)}
      />
    </div>
  );
};

export default FundsChart;
