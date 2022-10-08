import matchers from "@testing-library/jest-dom";
import { fetch, Headers, Request, Response } from "cross-fetch";
import { expect, vi } from "vitest";
import { server } from "./_mock/server";

// Extend vitest matchers with jest-dom
// all available matchers: https://github.com/testing-library/jest-dom#custom-matchers
expect.extend(matchers);

beforeAll(() => {
  // MSW does not intercept request for node.fetch
  global.fetch = fetch;
  global.Headers = Headers;
  global.Request = Request;
  global.Response = Response;

  // Add a mocked version of the window.matchMedia method,
  // to fix the "TypeError: window.matchMedia is not a function" error in vitest
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // deprecated
      removeListener: vi.fn(), // deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });

  server.listen({ onUnhandledRequest: "error" });
  // server.printHandlers(); // debug only
});

afterAll(() => server.close());

afterEach(() => server.resetHandlers());
