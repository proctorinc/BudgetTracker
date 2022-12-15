import { useQuery } from "react-query";

import { getBudgets } from "../api/getBudgets";

export const useBudgets = () => {
  return useQuery("budgets", getBudgets);
};
