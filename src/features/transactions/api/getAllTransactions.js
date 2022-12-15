import { fetchQuery } from "@/lib/fetch";

export const getAllTransactions = () => {
  return fetchQuery({
    endpoint: `/bank/transactions`,
  });
};
