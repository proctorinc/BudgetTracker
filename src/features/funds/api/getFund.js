import { fetchQuery } from "@/lib/fetch";

export const getFund = async (fundId) => {
  return fetchQuery({
    endpoint: `/bank/fund/${fundId}`,
  });
};
