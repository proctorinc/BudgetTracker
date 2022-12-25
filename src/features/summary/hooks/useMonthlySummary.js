import { useQuery } from "react-query";

import { getMonthlySummary } from "../api/getMonthlySummary";

export const useMonthlySummary = ({ month, year }) => {
  return useQuery({
    queryKey: ["summary", month, year],
    queryFn: () => getMonthlySummary(month, year),
    enabled: !!month && !!year,
  });
};
