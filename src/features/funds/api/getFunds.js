import { fetchQuery } from "@/lib/fetchQuery";

export const getFunds = async (user) => {
  return fetchQuery({
    endpoint: "/bank/funds",
  });
};
