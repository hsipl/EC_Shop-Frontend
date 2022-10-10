import { server } from "@/_mock/server";
import { rest } from "msw";
import { describe, expect, it } from "vitest";

const url = `${import.meta.env.VITE_API}/mock`;

describe("mock", () => {
  it("mock is working", async () => {
    server.use(
      rest.get(url, (req, res, ctx) => res(ctx.json({ message: "ok" })))
    );

    const response = await fetch(url);
    expect(response.status).toEqual(200);

    const data = await response.json();
    expect(data).toEqual({ message: "ok" });
  });
});
