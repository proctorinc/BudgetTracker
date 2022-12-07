import { fetchQuery } from "@/lib/fetchQuery";

export const getAllFundsBalance = (accountId) => {
  return fetchQuery({
    endpoint: `/bank/account/${accountId}/transactions/`,
  });
};
