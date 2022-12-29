import { motion } from "framer-motion";
import { ResponsivePie } from "@nivo/pie";
import {
  ResponsiveCirclePacking,
  ResponsiveCirclePackingCanvas,
} from "@nivo/circle-packing";

const FundsChart = ({ funds }) => {
  const fundData = funds
    .filter((fund) => fund.initial_amount > 0)
    .map((fund, index) => {
      if (fund.initial_amount > 0) {
        return {
          id: fund.name,
          value: fund.initial_amount,
        };
      }
    });

  const data = {
    id: "root",
    color: "#FFF",
    children: fundData,
  };

  return (
    <motion.div
      className="h-80 w-full"
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
        transition: {
          duration: 1,
          type: "spring",
          stiffness: 80,
        },
      }}
    >
      <ResponsivePie
        data={fundData}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        valueFormat=" >-$,.2f"
        innerRadius={0.45}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={10}
        colors={{ scheme: "greys" }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        sortByValue={true}
        arcLabel="id"
        arcLabelsSkipAngle={15}
        onClick={(node, event) => console.log(node)}
      />
      {/* <ResponsiveCirclePacking
        data={data}
        colors={{ scheme: "greys" }}
        colorBy="id"
        valueFormat=" >-$,.2f"
        childColor={{
          from: "color",
          modifiers: [["brighter", 0.4]],
        }}
        padding={2}
        leavesOnly={true}
        enableLabels={true}
        labelsSkipRadius={10}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 5]],
        }}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.5]],
        }}
      /> */}
    </motion.div>
  );
};

export default FundsChart;
