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
        accounts: [
          {
            balances: {
              available: null,
              current: 410,
              iso_currency_code: "USD",
              limit: 2000,
              unofficial_currency_code: null,
            },
            _id: "6386f736c50233ef04a985ce",
            account_id: "ndGpR83vPeTW5L6dQrQgSw7exLr9EDUEerkMa",
            mask: "3333",
            name: "Plaid Credit Card",
            official_name: "Plaid Diamond 12.5% APR Interest Credit Card",
            subtype: "credit card",
            type: "credit",
          },
          {
            balances: {
              available: null,
              current: 320.76,
              iso_currency_code: "USD",
              limit: null,
              unofficial_currency_code: null,
            },
            _id: "6386f736c50233ef04a985d0",
            account_id: "mxGLM8BvN7sVr1Dy4K4dheKmvgQ8NVHPmxjQB",
            mask: "5555",
            name: "Plaid IRA",
            official_name: null,
            subtype: "ira",
            type: "investment",
          },
          {
            balances: {
              available: null,
              current: 23631.98,
              iso_currency_code: "USD",
              limit: null,
              unofficial_currency_code: null,
            },
            _id: "6386f736c50233ef04a985d2",
            account_id: "y1X3k8ZwgyhW8bXQDzDPS1p3Dm9odWh53jd8N",
            mask: "6666",
            name: "Plaid 401k",
            official_name: null,
            subtype: "401k",
            type: "investment",
          },
        ],
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
