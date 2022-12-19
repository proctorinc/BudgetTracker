import { fetchQuery } from "@/lib/fetch";

export const getAccount = async (accountId) => {
  return fetchQuery({
    endpoint: `/bank/account/${accountId}`,
  });
};
