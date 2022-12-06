import { fetchQuery } from "@/lib/fetchQuery";

export const getAllFundsBalance = () => {
  return fetchQuery({
    endpoint: "/bank/funds/balance",
  });
};
