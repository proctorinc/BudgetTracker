import FundEntry from "./FundEntry";

const FundsList = ({ funds }) => {
  const fundEntries = funds?.map((fund) => (
    <FundEntry key={fund._id} fund={fund} />
  ));

  return (
    <>
      <h3 className="text-3xl">Funds:</h3>
      <div className="flex flex-col gap-2 pt-5">
        {fundEntries}
      </div>
    </>
  );
};

export default FundsList;
