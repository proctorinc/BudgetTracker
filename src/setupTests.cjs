import matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";
import "@testing-library/jest-dom";
import { server } from "./__mocks__/server.js";
import { afterAll, afterEach, beforeAll } from "vitest";
import { fetch } from "cross-fetch";

expect.extend(matchers);

global.fetch = fetch;

beforeAll(() => server.listen({ onUnhandledRequest: `error` }));

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
