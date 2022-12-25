import { useQuery } from "react-query";

import { getAccountTransactions } from "../api/getAccountTransactions";

export const useAccountTransactions = (page, accountId) => {
  return useQuery(["accounts/transactions", accountId, page], () =>
    getAccountTransactions(accountId, page)
  );
};
