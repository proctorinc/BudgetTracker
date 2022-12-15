import { fetchQuery } from "@/lib/fetch";

export const getAllAccounts = async () => {
  return fetchQuery({
    endpoint: "/bank/accounts/categorized",
  });
};
