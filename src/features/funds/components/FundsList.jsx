import { AnimatedList } from "@/components/Elements/AnimatedList";
import { Loader } from "@/components/Elements/Loader";

import FundEntry from "./FundEntry";

const FundsList = ({ funds, isLoading, error }) => {
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isLoading) {
    return <Loader />;
  }

  const fundEntries = funds?.map((fund) => (
    <FundEntry key={fund._id} fund={fund} />
  ));

  return <AnimatedList>{fundEntries}</AnimatedList>;
};

export default FundsList;
