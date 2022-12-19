import { fetchQuery } from "@/lib/fetch";

export const getMonthlySummary = async (month) => {
  return fetchQuery({
    endpoint: `/bank/summary/${month}`,
  });
};
