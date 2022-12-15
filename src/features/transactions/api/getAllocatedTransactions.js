import { fetchQuery } from "@/lib/fetch";

export const getAllocatedTransactions = () => {
  return fetchQuery({
    endpoint: `/bank/transactions/month/current/allocated`,
  });
};
