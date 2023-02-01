import { describe, it } from "vitest";
import { render } from "@/testUtils.jsx";
import { mockTransactions } from "@/__mocks__/mock_features/transactions";
import TransactionsList from "../TransactionsList";

describe("Transactions List", () => {
  it("renders Transactions in list", () => {
    render(<TransactionsList transactions={mockTransactions} />);
  });
});
