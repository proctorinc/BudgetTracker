import { useQuery } from "react-query";

import { getBudgetTransactions } from "../api/getBudgetTransactions";

export const useBudgetTransactions = ({ budgetId, month }) => {
  return useQuery(["budget/transactions", budgetId, month], () =>
    getBudgetTransactions(budgetId, month)
  );
};
