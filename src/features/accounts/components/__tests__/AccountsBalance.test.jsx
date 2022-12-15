import { describe, it } from "vitest";
import { render, screen } from "@/test-utils.jsx";
import AccountsBalance from "../AccountsTotalBalance";

describe("Accounts balance", () => {
  it("renders properly with title", () => {
    render(<AccountsBalance />);

    const totalBalanceText = screen.getByText(/net worth:/i, {
      exact: false,
    });

    expect(totalBalanceText).toBeInTheDocument();
  });

  it("loads total balance of accounts", async () => {
    render(<AccountsBalance />);

    const totalBalanceText = await screen.findByText(
      "Net Worth: $1,234,567.89"
    );

    expect(totalBalanceText).toBeInTheDocument();
  });
});
