import { describe, it, vi } from "vitest";
import { screen, render } from "@/test-utils.jsx";
import Fund from "../Fund";

vi.mock("react-router-dom", async () => ({
  ...(await vi.importActual("react-router-dom")), // use actual for all non-hook parts
  useParams: () => ({
    fundId: "test-id-1",
  }),
  useRouteMatch: () => ({ url: "/fund/test-id-1" }),
}));

describe("Fund Route", () => {
  it("renders properly", () => {
    render(<Fund />);

    const nameTitle = screen.findByRole("heading", {
      name: /car fund/i,
    });
    const amountTitle = screen.findByRole("heading", {
      name: /$1,234,567.89/i,
    });
  });
});
