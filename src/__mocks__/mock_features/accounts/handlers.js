import { rest } from "msw";

import { LOCAL_HOSTNAME } from "@/config";
import { mockAccountCategories } from "./mock_data";

export const accountHandlers = [
  rest.get(`${LOCAL_HOSTNAME}/accounts/categorized`, (req, res, ctx) => {
    return res(ctx.json(mockAccountCategories));
  }),
];
