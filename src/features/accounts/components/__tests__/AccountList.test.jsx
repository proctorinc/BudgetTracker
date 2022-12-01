import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import AccountList from "../AccountList";

describe("Account list", () => {
  it("renders properly", () => {
    render(<AccountList />);

    const accountsDiv = screen.getByRole("accounts-list");

    expect(accountsDiv).toBeInTheDocument();
  });

  it("loads list of accounts", async () => {
    render(<AccountList />);

    const plaidCreditCardAccount = await screen.findByText(
      /plaid credit card/i
    );
    const plaidIRAAccount = await screen.findByText(/plaid ira/i);
    const plaid401kAccount = await screen.findByText(/plaid 401k/i);

    expect(plaidCreditCardAccount).toBeInTheDocument();
    expect(plaidIRAAccount).toBeInTheDocument();
    expect(plaid401kAccount).toBeInTheDocument();
  });
});
