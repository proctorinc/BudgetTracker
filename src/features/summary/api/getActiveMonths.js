import { fetchQuery } from "@/lib/fetch";

export const getActiveMonths = async () => {
  return fetchQuery({
    endpoint: `/bank/summary/months/active`,
  });
};
