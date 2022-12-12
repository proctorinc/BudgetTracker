import { describe, it } from "vitest";
import { screen, render } from "@testing-library/react";
import FundsList from "../FundsList";
import { mockFunds } from "@/__mocks__/mock_data/funds";
import { Router } from "react-router-dom";

describe("fund list", () => {
  it("renders Funds Label", () => {
    render(
      <Router>
        <FundsList funds={mockFunds} />
      </Router>
    );
    const fundListLabel = screen.getByRole("heading", {
      name: /funds:/i,
    });
    expect(fundListLabel).toBeInTheDocument();
  });

  it("loads list of funds", async () => {
    render(
      <Router>
        <FundsList funds={mockFunds} />
      </Router>
    );

    const carFund = await screen.findByText("Car Fund");
    const vacationFund = await screen.findByText("Vacation Fund");

    expect(carFund).toBeInTheDocument();
    expect(vacationFund).toBeInTheDocument();
  });
});
