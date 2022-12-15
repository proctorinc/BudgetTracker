import { fetchQuery } from "@/lib/fetch";

export const getUnallocatedBalance = () => {
  return fetchQuery({
    endpoint: "/bank/funds/unallocated/balance",
  });
};
