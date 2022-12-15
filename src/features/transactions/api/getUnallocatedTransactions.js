import { fetchQuery } from "@/lib/fetch";

export const getUnallocatedTransactions = () => {
  return fetchQuery({
    endpoint: `/bank/transactions/month/current/unallocated`,
  });
};
