import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import { getAllocatedTransactions } from "../api/getAllocatedTransactions";
import { getUnallocatedTransactions } from "../api/getUnallocatedTransactions";

const useTransactions = () => {
  const [unallocatedTransactions, setUnallocatedTransactions] = useState();
  const { data, isLoading, error } = useFetch({
    query: getAllocatedTransactions,
  });

  useEffect(() => {
    getUnallocatedTransactions()
      .then((result) => setUnallocatedTransactions(result.transactions))
      .catch((err) => console.log(err));
  }, []);

  const isDataLoaded = !isLoading && !error && unallocatedTransactions;

  return {
    isLoading: isLoading,
    error,
    allocated: isDataLoaded ? data.transactions : [],
    unallocated: isDataLoaded ? unallocatedTransactions : [],
  };
};

export default useTransactions;
