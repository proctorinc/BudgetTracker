import { describe, it } from "vitest";
import { render } from "@/testUtils.jsx";
import { TransactionsList } from "../TransactionsList";
import { useUnallocatedTransactions } from "../../hooks/useUnallocatedTransactions";

describe("Transactions List", () => {
  it("renders Transactions in list", () => {
    render(<TransactionsList title="testing" useHook={useUnallocatedTransactions} />);

    expect(screen.getByText("testing")).toBeInTheDocument();
  });
});
