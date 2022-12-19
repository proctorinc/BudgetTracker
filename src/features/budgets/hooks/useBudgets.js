import { useQuery } from "react-query";

import { getBudgets } from "../api/getBudgets";

export const useBudgets = ({ month }) => {
  return useQuery(`budgets/${month}`, () => getBudgets(month));
};
