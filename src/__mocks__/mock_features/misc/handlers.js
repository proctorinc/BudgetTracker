import { rest } from "msw";

import { LOCAL_HOSTNAME } from "@/config";

import { mockActiveMonths } from "./mock_data";

export const miscHandlers = [
  rest.get(`${LOCAL_HOSTNAME}/summary/months/active`, (req, res, ctx) => {
    return res(ctx.json(mockActiveMonths));
  }),
];
