import { describe, it } from "vitest";
import { render } from "@/test-utils.jsx";
import TransactionsList from "../TransactionsList";
import { mockTransactions } from "@/__mocks__/mock_features/transactions";

describe("Create Fund Route", () => {
  it("renders create fund form", () => {
    render(<TransactionsList transactions={mockTransactions} />);
  });
});
