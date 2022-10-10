import { describe, expect, it } from "vitest";

const url = `${import.meta.env.VITE_API}/login`;

describe("login", () => {
  it("login success", async () => {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        account: "yuchi",
        password: "yuchi123",
      }),
    });
    expect(response.status).toEqual(200);

    const data = await response.json();
    expect(data).toEqual({ token: "tp7Gi2sLsavxFy9j" });
  });
});
