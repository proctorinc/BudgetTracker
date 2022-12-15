import { fetchQuery } from "@/lib/fetch";

export const getTransaction = (transactionId) => {
  return fetchQuery({
    endpoint: `/bank/transactions/${transactionId}`,
  });
};
