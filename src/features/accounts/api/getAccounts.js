import { fetchQuery } from "@/lib/fetch";

export const getAccounts = async () => {
  return fetchQuery({
    endpoint: "/bank/accounts/categorized",
  });
};
