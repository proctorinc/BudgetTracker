import { fetchQuery } from "@/lib/fetch";

export const getBudgetTransactions = (budgetId, month, year, page) => {
  return fetchQuery({
    endpoint: `/bank/budget/${budgetId}/transactions?month=${month}&year=${year}&page=${page}`,
  });
};
