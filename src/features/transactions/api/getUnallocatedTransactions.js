import { fetchQuery } from "@/lib/fetch";

export const getUnallocatedTransactions = (page) => {
  return fetchQuery({
    endpoint: `/bank/transactions/unallocated?page=${page}`,
  });
};
