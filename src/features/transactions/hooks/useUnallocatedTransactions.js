import { useQuery } from "react-query";

import { getUnallocatedTransactions } from "../api/getUnallocatedTransactions";

export const useUnallocatedTransactions = (page) => {
  return useQuery(["transactions", "unallocated", page], () =>
    getUnallocatedTransactions(page)
  );
};
