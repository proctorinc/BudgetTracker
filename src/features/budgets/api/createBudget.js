import { fetchQuery } from "@/lib/fetch";

export const createBudget = async ({ name, icon, goal }) => {
  return fetchQuery({
    endpoint: "/bank/budget/create",
    method: "POST",
    body: {
      name,
      icon,
      goal,
    },
  });
};
