import { getAllAccounts } from "../features/accounts";
import useFetch from "./useFetch";

const useAccounts = () => {
  const { data, isLoading, error } = useFetch({
    query: getAllAccounts,
  });

  return {
    cashAccounts: data?.categories.cash,
    creditAccounts: data?.categories.credit,
    investmentAccounts: data?.categories.investment,
    loanAccounts: data?.categories.loan,
    totalBalance: data?.total_balance,
    isLoading,
    error,
  };
};

export default useAccounts;
