import { fetchQuery } from "@/lib/fetch";

export const getBudget = async (budgetId, month, year) => {
  return fetchQuery({
    endpoint: `/bank/budget/${budgetId}?month=${month}&year=${year}`,
  });
};
