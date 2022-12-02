import useFunds from "../../../hooks/useFunds";
import FundEntry from "./FundEntry";

const FundsList = () => {
  const { funds } = useFunds();

  const fundEntries = funds?.map((fund) => (
    <FundEntry key={fund._id} fund={fund} />
  ));

  return (
    <>
      <h3 className="text-3xl">Funds:</h3>
      {fundEntries}
    </>
  );
};

export default FundsList;
