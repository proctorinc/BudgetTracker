import { fetchQuery } from "@/lib/fetch";

export const getMonthlySummary = async (month, year) => {
  return fetchQuery({
    endpoint: `/bank/summary?month=${month}&year=${year}`,
  });
};
