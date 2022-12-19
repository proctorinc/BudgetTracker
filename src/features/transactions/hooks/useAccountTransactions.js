import { useQuery } from "react-query";

import { getAccountTransactions } from "../api/getAccountTransactions";

export const useAccountTransactions = ({ accountId }) => {
  return useQuery(["accounts/transactions", accountId], () =>
    getAccountTransactions(accountId)
  );
};
