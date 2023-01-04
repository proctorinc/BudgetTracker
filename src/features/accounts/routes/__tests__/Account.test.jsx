import { describe, it } from "vitest";

import { render, screen } from "@/test-utils.jsx";
import Account from "../Account";

vi.mock("react-router-dom", () => {
  return {
    useParams: vi.fn().mockReturnValue({ accountId: "testing-123" }),
  };
});

describe("Account route", () => {
  it("renders properly", async () => {
    render(<Account />);

    // const backButton = screen.findByText();
    const balance = await screen.findByRole("heading", {
      name: /$1,000,000.00/i,
    });
    const name = await screen.findByRole("heading", {
      name: /Test Bank Account/i,
    });
    const fullName = await screen.findByText(/full account name/i);
    const typeAndAccountNumber = screen.findByText(
      /type > subtype > (...1234)/i
    );
    const transactionLabel = await screen.findByRole("heading", {
      name: /transactions/i,
    });

    // expect(backButton).toBeInTheDocument();
    expect(balance).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(fullName).toBeInTheDocument();
    expect(typeAndAccountNumber).toBeInTheDocument();
    expect(transactionLabel).toBeInTheDocument();
  });

  it("renders list of account transactions", () => {});
});
