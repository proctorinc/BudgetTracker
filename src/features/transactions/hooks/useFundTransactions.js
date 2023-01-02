import { useQuery } from "react-query";

import { getFundTransactions } from "../api/getFundTransactions";

export const useFundTransactions = (page, fundId) => {
  return useQuery(["funds/transactions", fundId, page], () =>
    getFundTransactions(fundId, page)
  );
};
