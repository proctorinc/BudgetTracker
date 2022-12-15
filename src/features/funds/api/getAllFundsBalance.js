import { fetchQuery } from "@/lib/fetch";

export const getAllFundsBalance = () => {
  return fetchQuery({
    endpoint: "/bank/funds/balance",
  });
};
