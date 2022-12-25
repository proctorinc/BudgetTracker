import { useQuery } from "react-query";

import { getBudgets } from "../api/getBudgets";

export const useBudgets = ({ month, year }) => {
  return useQuery(["budgets", month, year], () => getBudgets(month, year));
};
