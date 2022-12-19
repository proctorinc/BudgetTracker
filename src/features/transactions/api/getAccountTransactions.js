import { fetchQuery } from "@/lib/fetch";

export const getAccountTransactions = (accountId) => {
  return fetchQuery({
    endpoint: `/bank/account/${accountId}/transactions`,
  });
};
