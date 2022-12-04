import { fetchQuery } from "../../../lib/fetchQuery";

export const sendPublicTokenToServer = async (public_token) => {
  return fetchQuery({
    endpoint: "/bank/token/create/access_token",
    method: "POST",
    body: { public_token },
  });
};
