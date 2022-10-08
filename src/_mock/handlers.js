import { rest } from "msw";

export const handlers = [
  rest.post(`${import.meta.env.VITE_API}/login`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: "tp7Gi2sLsavxFy9j" }));
  }),
];
