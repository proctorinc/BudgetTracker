import { fetchQuery } from "@/lib/fetch";

export const getBudget = async (budgetId, month) => {
  return fetchQuery({
    endpoint: `/bank/budget/${budgetId}?month=${month}`,
  });
};
