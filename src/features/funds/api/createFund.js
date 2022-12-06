import { fetchQuery } from "@/lib/fetchQuery";

export const createFund = async ({ name, initialBalance }) => {
  return fetchQuery({
    endpoint: "/bank/fund/create",
    method: "POST",
    body: {
      name: name,
      initial_amount: initialBalance,
    },
  });
};
