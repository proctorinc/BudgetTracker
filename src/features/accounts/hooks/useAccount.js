import { useQuery } from "react-query";

import { getAccount } from "../api/getAccount";

export const useAccount = ({ accountId }) => {
  return useQuery({
    queryKey: ["account", accountId],
    queryFn: () => getAccount(accountId),
    enabled: !!accountId,
  });
};
