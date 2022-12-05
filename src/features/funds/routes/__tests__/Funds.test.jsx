import { describe, it, vi } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Funds from "../Funds";

const mockHistoryPush = vi.fn();

vi.mock("react-router-dom", async () => ({
  ...(await vi.importActual("react-router-dom")),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("Funds Route", () => {
  it("renders funds list", () => {
    render(<Funds />);
    const fundListLabel = screen.getByRole("heading", {
      name: /funds:/i,
    });
    expect(fundListLabel).toBeInTheDocument();
  });

  it("renders funds chart", () => {
    render(<Funds />);

    const fundsChart = screen.getByRole("heading", {
      name: /funds chart/i,
    });

    expect(fundsChart).toBeInTheDocument();
  });

  it("renders create fund button", () => {
    render(<Funds />);

    const createFundButton = screen.getByRole("button", {
      name: /new fund/i,
    });

    expect(createFundButton).toBeInTheDocument();
  });

  it("navigates to create fund page", async () => {
    const user = userEvent.setup();
    render(<Funds />);

    const createFundButton = screen.getByRole("button", {
      name: /new fund/i,
    });

    await user.click(createFundButton);

    expect(mockHistoryPush).toHaveBeenCalledWith("/funds/create");
  });
});
