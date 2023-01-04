import { rest } from "msw";

import { LOCAL_HOSTNAME } from "@/config";

import { mockBudgets } from "./mock_data";

export const budgetHandlers = [
  rest.get(`${LOCAL_HOSTNAME}/budgets`, (req, res, ctx) => {
    return res(
      ctx.json({
        budgets: mockBudgets,
      })
    );
  }),
];
