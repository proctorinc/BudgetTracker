import { useQuery } from "react-query";

import { getFunds } from "../api/getFunds";

export const useFunds = () => {
  return useQuery("funds", getFunds);
};
