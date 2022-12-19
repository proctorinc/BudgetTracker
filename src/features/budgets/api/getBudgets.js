import { fetchQuery } from "@/lib/fetch";

export const getBudgets = async (month) => {
  return fetchQuery({
    endpoint: `/bank/budgets?month=${month}`,
  });
};
