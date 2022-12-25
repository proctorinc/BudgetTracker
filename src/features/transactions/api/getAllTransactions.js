import { fetchQuery } from "@/lib/fetch";

export const getAllTransactions = (page) => {
  return fetchQuery({
    endpoint: `/bank/transactions?page=${page}`,
  });
};
