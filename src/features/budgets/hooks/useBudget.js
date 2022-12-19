import { useQuery } from "react-query";

import { getBudget } from "../api/getBudget";

export const useBudget = ({ budgetId, month }) => {
  return useQuery(["budget", budgetId, month], () =>
    getBudget(budgetId, month)
  );
};
