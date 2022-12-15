import TransactionUpdateDetail from "./TransactionDetail";
import { CurrencyDollarIcon } from "@heroicons/react/20/solid";

const UpdateSource = ({ source }) => {
  return (
    <TransactionUpdateDetail
      label={"Source"}
      icon={<CurrencyDollarIcon />}
      onClick={() => console.log("Go to update source")}
    >
      {source.name ? (
        <>
          <label>
            Type: <i>{source.type ? source.type : "None"}</i>
          </label>
          <label>
            Name: <i>{source.name ? source.name : "None"}</i>
          </label>
        </>
      ) : (
        <div>None</div>
      )}
    </TransactionUpdateDetail>
  );
};

export default UpdateSource;
