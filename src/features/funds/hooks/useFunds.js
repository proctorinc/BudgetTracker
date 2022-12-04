import useFetch from "@/hooks/useFetch";
import { getFunds } from "../api/getFunds";

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
