import { useQuery } from "react-query";

import { getAccount } from "../api/getAccount";

export const useAccount = ({ accountId }) => {
  return useQuery(["account", accountId], () => getAccount(accountId));
};
