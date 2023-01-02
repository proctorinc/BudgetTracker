import { fetchQuery } from "@/lib/fetch";

export const getFundTransactions = (fundId, page) => {
  return fetchQuery({
    endpoint: `/bank/fund/${fundId}/transactions?page=${page}`,
  });
};
