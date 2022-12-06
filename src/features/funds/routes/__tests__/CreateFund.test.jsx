import { describe, it, vi } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import CreateFund from "../CreateFund";

const mockedNavigator = vi.fn();
vi.mock("react-router-dom", async () => ({
  ...(await vi.importActual("react-router-dom")),
  useNavigate: () => mockedNavigator,
}));

describe("Create Fund Route", () => {
  it("renders create fund form", () => {
    render(
      <Router>
        <CreateFund />
      </Router>
    );

    const fundNameInput = screen.getByRole("textbox", {
      name: /name:/i,
    });
    const fundInitialAmountInput = screen.getByRole("spinbutton", {
      name: /initial balance:/i,
    });
    const createFundButton = screen.getByRole("button", {
      name: /create fund/i,
    });

    expect(fundNameInput).toBeInTheDocument();
    expect(fundInitialAmountInput).toBeInTheDocument();
    expect(createFundButton).toBeInTheDocument();
  });

  it("create fund button navigates to create fund page", async () => {
    const user = userEvent.setup();
    render(
      <Router>
        <CreateFund />
      </Router>
    );

    const createFundButton = screen.getByRole("button", {
      name: /create fund/i,
    });

    await user.click(createFundButton);

    expect(mockedNavigator).toHaveBeenCalledWith("/funds");
  });
});
