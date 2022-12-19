import { useQuery } from "react-query";

import { getActiveMonths } from "../api/getActiveMonths";

export const useActiveMonths = () => {
  return useQuery("summary/active/months", () => getActiveMonths());
};
