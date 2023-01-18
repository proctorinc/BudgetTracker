import { rest } from "msw";

import { LOCAL_HOSTNAME } from "@/config";

import { mockFunds } from "./mock_data";

export const fundHandlers = [
  rest.get(`${LOCAL_HOSTNAME}/funds`, (req, res, ctx) => {
    return res(
      ctx.json({
        total_balance: 12345,
        unallocated_balance: 3490,
        funds: [...mockFunds],
      })
    );
  }),

  rest.get(`${LOCAL_HOSTNAME}/funds/create`, (req, res, ctx) => {
    return res(
      ctx.json({
        message: "Successfully created fund",
      })
    );
  }),

  rest.get(`${LOCAL_HOSTNAME}/funds/balance`, (req, res, ctx) => {
    return res(
      ctx.json({
        balance: 123456.78,
      })
    );
  }),

  rest.get(`${LOCAL_HOSTNAME}/funds/unallocated/balance`, (req, res, ctx) => {
    return res(
      ctx.json({
        unallocated_balance: 123456.78,
      })
    );
  }),

  rest.get(`${LOCAL_HOSTNAME}/fund/test-id-1`, (req, res, ctx) => {
    return res(
      ctx.json({
        fund: mockFunds[0],
      })
    );
  }),

  rest.post(`${LOCAL_HOSTNAME}/fund/create`, (req, res, ctx) => {
    return res(
      ctx.json({
        message: "successfully created fund!",
      })
    );
  }),
];
