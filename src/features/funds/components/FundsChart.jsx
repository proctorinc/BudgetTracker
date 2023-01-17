import { useMemo } from "react";
import { motion } from "framer-motion";
import { ResponsivePie } from "@nivo/pie";

const FundsChart = ({ funds, title, size, labels = true, className }) => {
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

  let height = "h-72";
  let textSize = "text-5xl";
  let chartRadius = 0.45;

  if (size === "sm") {
    height = "h-40";
    textSize = "text-2xl";
    chartRadius = 0.6;
  }

  return (
    <div className={`${className}`}>
      <motion.div
        className={`${height} w-full relative`}
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
        {title && (
          <h3
            className={`${textSize} text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-extralight`}
          >
            {title}
          </h3>
        )}
        <ResponsivePie
          data={fundData}
          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
          valueFormat=" >-$,.2f"
          innerRadius={chartRadius}
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
          arcLabel={labels ? "id" : null}
          arcLabelsSkipAngle={15}
          onClick={(node, event) => console.log(node)}
        />
      </motion.div>
    </div>
  );
};

export default FundsChart;
