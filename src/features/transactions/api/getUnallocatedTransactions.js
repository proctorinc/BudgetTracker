import { fetchQuery } from "@/lib/fetchQuery";

export const getUnallocatedTransactions = () => {
  return fetchQuery({
    endpoint: `/bank/transactions/month/current/unallocated`,
  });
};
