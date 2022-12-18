import { useQuery } from "react-query";

import { getAllTransactions } from "../api/getAllTransactions";

export const useTransactions = () => {
  return useQuery("transactions/all", getAllTransactions);
};
