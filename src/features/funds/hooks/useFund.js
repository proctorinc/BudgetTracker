import { useQuery } from "react-query";

import { getFund } from "../api/getFund";

export const useFund = ({ fundId }) => {
  return useQuery(["funds", fundId], () => getFund(fundId));
};
