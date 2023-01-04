import { useQuery } from "react-query";

import { getBudgetTransactions } from "../api/getBudgetTransactions";

export const useBudgetTransactions = (page, budgetId, month, year) => {
  return useQuery(["budget", "transactions", budgetId, month, year, page], () =>
    getBudgetTransactions(budgetId, month, year, page)
  );
};
