import { useQuery } from "react-query";

import { getBudget } from "../api/getBudget";

export const useBudget = ({ budgetId, month, year }) => {
  return useQuery(["budget", budgetId, month, year], () =>
    getBudget(budgetId, month, year)
  );
};
