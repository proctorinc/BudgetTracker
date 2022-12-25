import { fetchQuery } from "@/lib/fetch";

export const getAccountTransactions = (accountId, page) => {
  return fetchQuery({
    endpoint: `/bank/account/${accountId}/transactions?page=${page}`,
  });
};
