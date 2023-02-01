import { describe, it } from "vitest";

import { render, screen, userEvent } from "@/testUtils.jsx";
import { mockCashAccounts } from "@/__mocks__/mock_features/accounts";

import AccountEntry from "../AccountEntry";

const mockedNavigator = vi.fn();

vi.mock("react-router-dom", async () => ({
  ...(await vi.importActual("react-router-dom")),
  useNavigate: () => mockedNavigator,
}));

describe("Account Entry", () => {
  it("renders properly", () => {
    render(<AccountEntry account={mockCashAccounts[0]} />);
    const name = screen.getByText("Plaid Saving");
    const amount = screen.getByText("$210.00");
    const typeAndAccountNumber = screen.getByText("savings - 1111");

    expect(name).toBeInTheDocument();
    expect(amount).toBeInTheDocument();
    expect(typeAndAccountNumber).toBeInTheDocument();
  });

  it("navigates to account detail route on click", async () => {
    const user = userEvent.setup();
    render(<AccountEntry account={mockCashAccounts[0]} />);
    const accountEntryHeader = screen.getByText("Plaid Saving");
    await user.click(accountEntryHeader);

    expect(mockedNavigator).toHaveBeenCalledWith(
      "/accounts/6386f736c50233ef04a985da"
    );
  });
});
