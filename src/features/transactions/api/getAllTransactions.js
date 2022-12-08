import { fetchQuery } from "@/lib/fetchQuery";

export const getAllTransactions = () => {
  return fetchQuery({
    endpoint: `/transactions`,
  });
};
