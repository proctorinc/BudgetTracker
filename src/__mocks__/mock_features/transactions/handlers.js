import { rest } from "msw";

import { LOCAL_HOSTNAME } from "@/config";

import { mockTransactions } from "./mock_data";

export const transactionHandlers = [
  rest.get(
    `${LOCAL_HOSTNAME}/transaction/6390fa3cc50233ef043b61e1`,
    (req, res, ctx) => {
      return res(
        ctx.json({
          transaction: mockTransactions[0],
        })
      );
    }
  ),
];
