import { describe, it } from "vitest";
import { screen, render } from "@/test-utils.jsx";
import FundsList from "../FundsList";
import { mockFunds } from "@/__mocks__/mock_features/funds";

describe("fund list", () => {
  it("renders Funds Label", () => {
    render(<FundsList funds={mockFunds} />);
    const fundListLabel = screen.getByRole("heading", {
      name: /funds:/i,
    });
    expect(fundListLabel).toBeInTheDocument();
  });

  it("loads list of funds", async () => {
    render(<FundsList funds={mockFunds} />);

    const carFund = await screen.findByText("Car Fund");
    const vacationFund = await screen.findByText("Vacation Fund");

    expect(carFund).toBeInTheDocument();
    expect(vacationFund).toBeInTheDocument();
  });
});
