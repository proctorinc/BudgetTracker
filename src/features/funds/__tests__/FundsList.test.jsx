import { describe, it } from "vitest";
import { screen, render } from "@testing-library/react";
import FundsList from "../components/FundsList";

describe("fund list", () => {
  it("renders correctly", () => {
    render(<FundsList />);
    const fundListLabel = screen.getByRole("heading", {
      name: /funds:/i,
    });
    expect(fundListLabel).toBeInTheDocument();
  });

  it("loads list of funds", async () => {
    render(<FundsList />);

    const carFund = await screen.findByText("Car Fund");
    const vacationFund = await screen.findByText("Vacation Fund");

    expect(carFund).toBeInTheDocument();
    expect(vacationFund).toBeInTheDocument();
  });
});
