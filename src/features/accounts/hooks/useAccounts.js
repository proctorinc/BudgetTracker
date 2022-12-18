import { useQuery } from "react-query";

import { getAllAccounts } from "../api/getAllAccounts";

export const useAccounts = () => {
  return useQuery("accounts/categories", getAllAccounts);
};
