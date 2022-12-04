import { fetchQuery } from "@/lib/fetchQuery";

export const getAllAccounts = async () => {
  return fetchQuery({
    endpoint: "/bank/accounts/categorized",
  });
};
