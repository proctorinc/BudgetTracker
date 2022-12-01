import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import AccountsBalance from "../AccountsBalance";

describe("Accounts balance", () => {
  it("renders properly with title", () => {
    render(<AccountsBalance />);

    const totalBalanceText = screen.getByText(/total balance:/i, {
      exact: false,
    });

    expect(totalBalanceText).toBeInTheDocument();
  });

  it("loads total balance of accounts", async () => {
    render(<AccountsBalance />);

    const totalBalanceText = await screen.findByText(
      "Total Balance: $1,234,567.89"
    );

    expect(totalBalanceText).toBeInTheDocument();
  });
});
