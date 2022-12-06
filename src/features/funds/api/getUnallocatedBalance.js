import { fetchQuery } from "@/lib/fetchQuery";

export const getUnallocatedBalance = () => {
  return fetchQuery({
    endpoint: "/bank/funds/unallocated/balance",
  });
};
