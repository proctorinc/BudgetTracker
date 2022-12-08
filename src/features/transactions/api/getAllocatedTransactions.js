import { fetchQuery } from "@/lib/fetchQuery";

export const getAllocatedTransactions = () => {
  return fetchQuery({
    endpoint: `/bank/transactions/month/current/allocated`,
  });
};
