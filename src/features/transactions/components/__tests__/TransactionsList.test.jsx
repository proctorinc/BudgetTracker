import { describe, it } from "vitest";
import TransactionsList from "../TransactionsList";

describe("Create Fund Route", () => {
  it("renders create fund form", () => {
    render(<TransactionsList transactions={mockTransactions} />);
  });
});
