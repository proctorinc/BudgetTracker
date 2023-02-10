import { describe, it } from "vitest";

import { render, screen, act } from "@/testUtils.jsx";
import { mockAccountId } from "@/__mocks__/mock_features/accounts";

import Account from "../Account";

vi.mock("react-router-dom", async () => ({
  ...(await vi.importActual("react-router-dom")),
  useParams: () => ({ accountId: mockAccountId }),
}));

describe("Account route", () => {
  beforeEach(async () => {
    await act(async () => {
      render(<Account />);
    })
  })

  it("renders properly", async () => {
    const backButton = screen.findByRole("button");
    const balance = await screen.findByRole("heading", {
      name: /$1,000,000.00/i,
    });
    const name = await screen.findByRole("heading", {
      name: /Test Bank Account/i,
    });
    const fullName = await screen.findByText(/full account name/i);
    const typeAndAccountNumber = screen.findByText(
      /cash > savings > (...1234)/i
    );
    const transactionLabel = await screen.findByRole("heading", {
      name: /transactions/i,
    });

    expect(backButton).toBeInTheDocument();
    expect(balance).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(fullName).toBeInTheDocument();
    expect(typeAndAccountNumber).toBeInTheDocument();
    expect(transactionLabel).toBeInTheDocument();
  });

  it("renders list of account transactions", () => {});
});
