import { describe, it } from "vitest";
import { screen, render } from "@/testUtils.jsx";
import { mockFunds } from "@/__mocks__/mock_features/funds";

import FundsList from "../FundsList";

describe("Fund list", () => {
  it("Renders properly with no funds", () => {
    render(<FundsList funds={[]} />);
    const noFundsLabel = screen.getByRole("listitem");
    expect(noFundsLabel).toHaveTextContent(/none/i);
  });

  it("Renders list of funds properly", async () => {
    render(<FundsList funds={mockFunds} />);

    const carFund = await screen.findByText("Car Fund");
    const vacationFund = await screen.findByText("Vacation Fund");

    expect(carFund).toBeInTheDocument();
    expect(vacationFund).toBeInTheDocument();
  });
});
