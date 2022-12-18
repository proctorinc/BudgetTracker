import { fetchQuery } from "@/lib/fetch";

export const getFundTransactions = (fundId) => {
  return fetchQuery({
    endpoint: `/bank/fund/${fundId}/transactions`,
  });
};
