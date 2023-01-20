import { rest } from "msw";

import { LOCAL_HOSTNAME } from "@/config";

import { mockUser } from "./mock_data";

export const authHandlers = [
  rest.get(`${LOCAL_HOSTNAME}/auth/me`, (req, res, ctx) => {
    return res(ctx.json(mockUser));
  }),
];
