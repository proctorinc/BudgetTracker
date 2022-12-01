import { useEffect, useState } from "react";
import { getAllAccounts } from "../features/accounts/api/getAllAccounts";
import { getAllAccountsBalance } from "../features/accounts/api/getAllAccountsBalance";
import useUser from "./useUser";

const useAccounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);

  const { user } = useUser();

  useEffect(() => {
    getAllAccounts(user)
      .then(setAccounts)
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getAllAccountsBalance(user)
      .then(setTotalBalance)
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return {
    accounts,
    totalBalance,
  };
};

export default useAccounts;
