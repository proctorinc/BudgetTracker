import { rest } from "msw";

export const handlers = [
  rest.get(
    "http://localhost:4090/bank/accounts/balance/current",
    (req, res, ctx) => {
      return res(
        ctx.json({
          balance: 1234567.89,
        })
      );
    }
  ),
  rest.get("http://localhost:4090/bank/accounts", (req, res, ctx) => {
    return res(
      ctx.json({
        accounts: {},
      })
    );
  }),
  rest.post(
    "http://localhost:4090/bank/token/create/link_token",
    (req, res, ctx) => {
      return res(
        ctx.json({
          link_token: "link-sandbox-8bfd221d-ab45-4576-a35f-ec6d94cf419d",
        })
      );
    }
  ),
  rest.get(
    "http://localhost:4090/bank/token/create/access_token",
    (req, res, ctx) => {
      if (res.body.public_token === null) {
        return ctx.status(400);
      }
      return res(
        ctx.json({
          message: "Successfully created access token",
        })
      );
    }
  ),
];
