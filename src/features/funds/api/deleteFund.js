import { fetchQuery } from "@/lib/fetch";

export const deleteFund = async ({ id }) => {
  return fetchQuery({
    endpoint: `/bank/fund/${id}/delete`,
    method: "DELETE",
  });
};
