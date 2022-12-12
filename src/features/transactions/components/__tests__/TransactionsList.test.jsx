import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import TransactionsList from "../TransactionsList";
import { mockTransactions } from "@/__mocks__/mock_data/transactions";
import { Router } from "react-router-dom";

describe("Create Fund Route", () => {
  it("renders create fund form", () => {
    render(
      <Router>
        <TransactionsList transactions={mockTransactions} />)
      </Router>
    );
  });
});
