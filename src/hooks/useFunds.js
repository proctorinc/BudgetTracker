import { getFunds } from "../features/funds";
import useFetch from "./useFetch";

const useFunds = () => {
  const { data, isLoading, error } = useFetch({
    query: getFunds,
  });

  return {
    funds: !isLoading && !error ? data.funds : [],
    isLoading,
    error,
  };
};

export default useFunds;
