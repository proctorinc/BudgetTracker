import { rest } from "msw";

import { LOCAL_HOSTNAME } from "@/config";
import { mockAccount, mockAccountCategories, mockAccountId } from "./mock_data";
import { mockTransactions } from "../transactions";

export const accountHandlers = [
  rest.get(`${LOCAL_HOSTNAME}/accounts/categorized`, (req, res, ctx) => {
    return res(ctx.json(mockAccountCategories));
  }),

  rest.get(`${LOCAL_HOSTNAME}/account/${mockAccountId}`, (req, res, ctx) => {
    return res(ctx.json(mockAccount));
  }),

  rest.get(
    `${LOCAL_HOSTNAME}/account/${mockAccountId}/transactions`,
    (req, res, ctx) => {
      return res(
        ctx.json({
          has_next: false,
          next_page: -1,
          transactions: [mockTransactions],
        })
      );
    }
  ),
];
