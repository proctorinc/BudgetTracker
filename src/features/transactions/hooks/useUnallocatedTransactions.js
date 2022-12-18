import { useQuery } from "react-query";

import { getUnallocatedTransactions } from "../api/getUnallocatedTransactions";

export const useUnallocatedTransactions = () => {
  return useQuery("transactions/unallocated", getUnallocatedTransactions);
};
