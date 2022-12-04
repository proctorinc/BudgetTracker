import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import AccountList from "../AccountList";

describe("Account list", () => {
  it("renders properly", () => {
    render(<AccountList />);

    const cashAccountsLabel = screen.getByRole("heading", {
      name: /cash:/i,
      exact: false,
    });
    const investmentsAccountsLabel = screen.getByRole("heading", {
      name: /investment:/i,
      exact: false,
    });
    const loansAccountsLabel = screen.getByRole("heading", {
      name: /loan:/i,
      exact: false,
    });
    const creditLabel = screen.getByRole("heading", {
      name: /credit:/i,
      exact: false,
    });

    expect(cashAccountsLabel).toBeInTheDocument();
    expect(investmentsAccountsLabel).toBeInTheDocument();
    expect(loansAccountsLabel).toBeInTheDocument();
    expect(creditLabel).toBeInTheDocument();
  });

  it("loads list of accounts", async () => {
    render(<AccountList />);

    const plaidCreditCardAccount = await screen.findByText(
      /plaid credit card/i
    );
    const plaidIRAAccount = await screen.findByText(/plaid ira/i);
    const plaidMortgageAccount = await screen.findByText(/plaid mortgage/i);
    const plaidSavingsAccount = await screen.findByText(/plaid saving/i);

    expect(plaidCreditCardAccount).toBeInTheDocument();
    expect(plaidIRAAccount).toBeInTheDocument();
    expect(plaidMortgageAccount).toBeInTheDocument();
    expect(plaidSavingsAccount).toBeInTheDocument();
  });

  it("loads category balances correctly", async () => {
    render(<AccountList />);

    const cashAccountsLabel = await screen.findByRole("heading", {
      name: "Cash: $150.01",
    });
    const investmentsAccountsLabel = await screen.findByRole("heading", {
      name: "Investment: $2,408.00",
    });
    const loansAccountsLabel = await screen.findByRole("heading", {
      name: "Loan: $234.00",
    });
    const creditLabel = await screen.findByRole("heading", {
      name: "Credit: $23,490.34",
    });

    expect(cashAccountsLabel).toBeInTheDocument();
    expect(investmentsAccountsLabel).toBeInTheDocument();
    expect(loansAccountsLabel).toBeInTheDocument();
    expect(creditLabel).toBeInTheDocument();
  });

  it("loads account balances correctly", async () => {
    render(<AccountList />);

    const plaidCreditCardAmount = await screen.findByText("$410.00");
    const plaidIRAAmount = await screen.findByText("$320.76");
    const plaidMortgageAmount = await screen.findByText("$56,302.06");
    const plaidSavingsAmount = await screen.findByText("$210.00");

    expect(plaidCreditCardAmount).toBeInTheDocument();
    expect(plaidIRAAmount).toBeInTheDocument();
    expect(plaidMortgageAmount).toBeInTheDocument();
    expect(plaidSavingsAmount).toBeInTheDocument();
  });
});
