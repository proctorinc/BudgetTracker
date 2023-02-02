import { rest } from "msw";

import { API_URL } from "@/config";

import { mockUser } from "./mock_data";

export const authHandlers = [
  rest.get(`${API_URL}/auth/me`, (req, res, ctx) => {
    return res(ctx.json(mockUser));
  }),

  rest.post(`${API_URL}/auth/logout`, (req, res, ctx) => {
    return res(ctx.json({ message: "Successfully logged out" }));
  }),

  rest.post(`${API_URL}/auth/login`, async (req, res, ctx) => {
    const { email, password } = await req.json();
    if (email === mockUser.email && password === mockUser.password) {
      return res(ctx.json({ user: mockUser }));
    } else {
      return res(ctx.status(401));
    }
  }),
];
