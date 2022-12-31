import { fetchQuery } from "@/lib/fetch";

export const getBudgetTransactions = (budgetId, month, page) => {
  return fetchQuery({
    endpoint: `/bank/budget/${budgetId}/transactions?page=${page}`,
  });
};
