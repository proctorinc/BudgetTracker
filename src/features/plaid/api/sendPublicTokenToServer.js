import { fetchQuery } from "@/lib/fetch";

export const sendPublicTokenToServer = async (public_token) => {
  return fetchQuery({
    endpoint: "/bank/token/create/access_token",
    method: "POST",
    body: { public_token },
  });
};
