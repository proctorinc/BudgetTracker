import { useQuery } from "react-query";

import { getAllTransactions } from "../api/getAllTransactions";

export const useTransactions = (page) => {
  return useQuery(["transactions/all", page], () => getAllTransactions(page));
};
