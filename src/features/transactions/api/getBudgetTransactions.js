import { fetchQuery } from "@/lib/fetch";

export const getBudgetTransactions = (budgetId, month) => {
  return fetchQuery({
    endpoint: `/bank/budget/${budgetId}/transactions`,
  });
};
