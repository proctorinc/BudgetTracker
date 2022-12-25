import { AnimatedList } from "@/components/Elements/AnimatedList";

import FundEntry from "./FundEntry";

const FundsList = ({ funds, error }) => {
  if (error) {
    return <div>Error: {error}</div>;
  }

  const fundEntries = funds?.map((fund) => (
    <FundEntry key={fund._id} fund={fund} />
  ));

  return <AnimatedList>{fundEntries}</AnimatedList>;
};

export default FundsList;
