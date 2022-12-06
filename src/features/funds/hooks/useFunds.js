import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import { getAllFundsBalance } from "../api/getAllFundsBalance";
import { getFunds } from "../api/getFunds";
import { getUnallocatedBalance } from "../api/getUnallocatedBalance";

const useFunds = () => {
  const [totalBalance, setTotalBalance] = useState();
  const [unallocatedBalance, setUnallocatedBalance] = useState();
  const { data, isLoading, error } = useFetch({
    query: getFunds,
  });

  useEffect(() => {
    getAllFundsBalance()
      .then((result) => setTotalBalance(result.total_balance))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getUnallocatedBalance()
      .then((result) => setUnallocatedBalance(result.unallocated_balance))
      .catch((err) => console.log(err));
  }, []);

  const isDataLoaded = !isLoading && !error && totalBalance;

  return {
    funds: isDataLoaded ? data.funds : [],
    totalBalance,
    unallocatedBalance,
    isLoading,
    error,
  };
};

export default useFunds;
