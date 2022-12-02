import { useEffect, useState } from "react";
import { getAllAccounts } from "../features/accounts";
import useUser from "./useUser";

const useAccounts = () => {
  const [accountsData, setAccountsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  useEffect(() => {
    getAllAccounts(user)
      .then(setAccountsData)
      .then(() => setLoading(false))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return {
    cashAccounts: accountsData.categories?.cash,
    creditAccounts: accountsData.categories?.credit,
    investmentAccounts: accountsData.categories?.investment,
    loanAccounts: accountsData.categories?.loan,
    totalBalance: accountsData.total_balance,
    loading,
  };
};

export default useAccounts;
