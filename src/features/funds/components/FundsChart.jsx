import { ResponsivePie } from "@nivo/pie";

const FundsChart = ({ funds }) => {

  const data = funds.filter((fund) => fund.initial_amount > 0)
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
        colors={{ scheme: "pastel2" }}
        borderWidth={2}
        borderColor={
          {"from":"color","modifiers":[["darker", 0.2]]}
        }
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color', "modifiers":[["darker", 0.2]]}}
        sortByValue={true}
        arcLabel="id"
        arcLabelsSkipAngle={15}
        onClick={(node, event) => console.log(node)}
      />
    </div>
  );
};

export default FundsChart;
