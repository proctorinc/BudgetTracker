import { useQuery } from "react-query";

import { getAllocatedTransactions } from "../api/getAllocatedTransactions";
import { getUnallocatedTransactions } from "../api/getUnallocatedTransactions";

export const useAllocatedTransactions = () => {
  return useQuery("transactions", getAllocatedTransactions);
};
