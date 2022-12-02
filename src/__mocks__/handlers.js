import { rest } from "msw";
import {
  mockAccountsTotalBalance,
  mockCashAccounts,
  mockCreditAccounts,
  mockInvestmentAccounts,
  mockLoanAccounts,
} from "./mock_data/accounts";
import { mockFunds } from "./mock_data/funds";

export const handlers = [
  rest.get(
    "http://localhost:4090/bank/accounts/categorized",
    (req, res, ctx) => {
      return res(
        ctx.json({
          total_balance: mockAccountsTotalBalance,
          categories: {
            cash: {
              subtotal: 150.01,
              accounts: [...mockCashAccounts],
            },
            credit: {
              subtotal: 23490.34,
              accounts: [...mockCreditAccounts],
            },
            investment: {
              subtotal: 2408.0,
              accounts: [...mockInvestmentAccounts],
            },
            loan: {
              subtotal: 234,
              accounts: [...mockLoanAccounts],
            },
          },
        })
      );
    }
  ),
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
  rest.get("http://localhost:4090/bank/funds", (req, res, ctx) => {
    return res(
      ctx.json({
        funds: [...mockFunds],
      })
    );
  }),
];
