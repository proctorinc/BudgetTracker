import { useQuery } from "react-query";

import { getUnallocatedBalance } from "../api/getUnallocatedBalance";

export const useFundsUnallocatedBalance = () => {
  return useQuery("unallocated_balance", getUnallocatedBalance);
};
