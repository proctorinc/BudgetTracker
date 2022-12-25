import { fetchQuery } from "@/lib/fetch";

export const getBudgets = async (month, year) => {
  return fetchQuery({
    endpoint: `/bank/budgets?month=${month}&year=${year}`,
  });
};
