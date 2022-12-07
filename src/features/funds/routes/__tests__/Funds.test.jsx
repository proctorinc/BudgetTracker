import { describe, it, vi } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Funds from "../Funds";
import { BrowserRouter as Router } from "react-router-dom";

// vi.mock("../../components/FundsChart", () => () => {
//   return <div data-testid="funds-chart"></div>;
// });

const mockedNavigator = vi.fn();
vi.mock("react-router-dom", async () => ({
  ...(await vi.importActual("react-router-dom")),
  useNavigate: () => mockedNavigator,
}));

describe("Funds Route", () => {
  it("renders funds list", async () => {
    render(
      <Router>
        <Funds />
      </Router>
    );
    const fundListLabel = await screen.findByRole("heading", {
      name: /funds:/i,
    });
    expect(fundListLabel).toBeInTheDocument();
  });

  it("renders funds chart", async () => {
    render(
      <Router>
        <Funds />
      </Router>
    );

    const fundsChart = await screen.findByTestId("funds-chart");

    expect(fundsChart).toBeInTheDocument();
  });

  it("renders create fund button", async () => {
    render(
      <Router>
        <Funds />
      </Router>
    );

    const createFundButton = await screen.findByRole("button", {
      name: /new fund/i,
    });

    expect(createFundButton).toBeInTheDocument();
  });

  it("create fund button navigates to create fund page", async () => {
    const user = userEvent.setup();
    render(
      <Router>
        <Funds />
      </Router>
    );

    const createFundButton = await screen.findByRole("button", {
      name: /new fund/i,
    });

    await user.click(createFundButton);

    expect(mockedNavigator).toHaveBeenCalledWith("/funds/create");
  });
});
