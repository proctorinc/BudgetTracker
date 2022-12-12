import { fetchQuery } from "@/lib/fetchQuery";

export const getTransaction = (transactionId) => {
  return fetchQuery({
    endpoint: `/bank/transactions/${transactionId}`,
  });
};
