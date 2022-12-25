import { fetchQuery } from "@/lib/fetch";

export const deleteBudget = async ({ id }) => {
  return fetchQuery({
    endpoint: `/bank/budget/${id}/delete`,
    method: "DELETE",
  });
};
