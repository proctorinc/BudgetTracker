import { useQuery } from "react-query";

import { getAccounts } from "../api/getAccounts";

export const useAccounts = () => {
  return useQuery("accounts/categories", getAccounts);
};
