import useFetch from "@/hooks/useFetch";
import { getAllAccounts } from "../api/getAllAccounts";

const useAccounts = () => {
  const { data, isLoading, error } = useFetch({
    query: getAllAccounts,
  });

  return {
    accounts: data?.categories,
    netBalance: data?.total_balance,
    isLoading,
    error,
  };
};

export default useAccounts;
