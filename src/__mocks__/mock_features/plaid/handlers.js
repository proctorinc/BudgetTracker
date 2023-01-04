import { rest } from "msw";

import { LOCAL_HOSTNAME } from "@/config";

export const plaidHandlers = [
  rest.post(`${LOCAL_HOSTNAME}/token/create/link_token`, (req, res, ctx) => {
    return res(
      ctx.json({
        link_token: "link-sandbox-8bfd221d-ab45-4576-a35f-ec6d94cf419d",
      })
    );
  }),

  rest.get(`${LOCAL_HOSTNAME}/token/create/access_token`, (req, res, ctx) => {
    if (res.body.public_token === null) {
      return ctx.status(400);
    }
    return res(
      ctx.json({
        message: "Successfully created access token",
      })
    );
  }),
];
