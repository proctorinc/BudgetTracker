import { useQuery } from "react-query";

import { getFundTransactions } from "../api/getFundTransactions";

export const useFundTransactions = ({ fundId }) => {
  return useQuery(`funds/${fundId}/transactions`, () =>
    getFundTransactions(fundId)
  );
};
