import { rest } from "msw";
import {
  mockAccountsTotalBalance,
  mockCashAccounts,
  mockCreditAccounts,
  mockInvestmentAccounts,
  mockLoanAccounts,
} from "./mock_data/accounts";
import { mockBudgets } from "./mock_data/budgets";
import { mockFunds } from "./mock_data/funds";
import { mockTransactions } from "./mock_data/transactions";

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
        total_balance: 12345,
        unallocated_balance: 3490,
        funds: [...mockFunds],
      })
    );
  }),

  rest.get("http://localhost:4090/bank/funds/create", (req, res, ctx) => {
    return res(
      ctx.json({
        message: "Successfully created fund",
      })
    );
  }),

  rest.get("http://localhost:4090/bank/funds/balance", (req, res, ctx) => {
    return res(
      ctx.json({
        balance: 123456.78,
      })
    );
  }),

  rest.get(
    "http://localhost:4090/bank/funds/unallocated/balance",
    (req, res, ctx) => {
      return res(
        ctx.json({
          unallocated_balance: 123456.78,
        })
      );
    }
  ),

  rest.get(
    "http://localhost:4090/bank/transaction/6390fa3cc50233ef043b61e1",
    (req, res, ctx) => {
      return res(
        ctx.json({
          transaction: mockTransactions[0],
        })
      );
    }
  ),

  rest.get("http://localhost:4090/bank/budgets", (req, res, ctx) => {
    return res(
      ctx.json({
        budgets: mockBudgets,
      })
    );
  }),
];
