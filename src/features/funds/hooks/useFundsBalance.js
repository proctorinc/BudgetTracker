import { useQuery } from "react-query";

import { getAllFundsBalance } from "../api/getAllFundsBalance";

export const useFundsBalance = () => {
  return useQuery("total_balance", getAllFundsBalance);
};
