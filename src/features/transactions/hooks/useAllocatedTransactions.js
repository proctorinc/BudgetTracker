import { useQuery } from "react-query";

import { getAllocatedTransactions } from "../api/getAllocatedTransactions";

export const useAllocatedTransactions = () => {
  return useQuery("transactions", "allocated", getAllocatedTransactions);
};
