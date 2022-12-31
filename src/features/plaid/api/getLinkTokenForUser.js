import { fetchQuery } from "@/lib/fetch";

export const getLinkTokenForUser = async () => {
  return fetchQuery({
    endpoint: "/bank/token/create/link_token",
    method: "POST",
  });
};
