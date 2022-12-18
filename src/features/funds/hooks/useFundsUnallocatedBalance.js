import { useQuery } from "react-query";

import { getUnallocatedBalance } from "../api/getUnallocatedBalance";

export const useFundsUnallocatedBalance = () => {
  return useQuery("funds/unallocated/balance", getUnallocatedBalance);
};
