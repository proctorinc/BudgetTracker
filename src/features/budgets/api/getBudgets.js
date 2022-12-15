import { fetchQuery } from "@/lib/fetch";

export const getBudgets = async () => {
  return fetchQuery({
    endpoint: "/bank/budgets",
  });
};
