import { useQuery } from "react-query";

import { getBudgetTransactions } from "../api/getBudgetTransactions";

export const useBudgetTransactions = (page, budgetId, month) => {
  return useQuery(["budget/transactions", budgetId, month, page], () =>
    getBudgetTransactions(budgetId, month, page)
  );
};
