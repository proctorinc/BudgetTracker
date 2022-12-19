import { useQuery } from "react-query";

import { getMonthlySummary } from "../api/getMonthlySummary";

export const useMonthlySummary = ({ month }) => {
  return useQuery({
    queryKey: ["summary", month],
    queryFn: () => getMonthlySummary(month),
    enabled: !!month,
  });
};
