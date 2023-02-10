import { describe, it } from "vitest";
import { screen, render, act } from "@/testUtils.jsx";
import Budgets from "../Budgets";
import { mockBudgets } from "@/__mocks__/mock_features/budgets";

describe("Budgets Route", () => {
  beforeEach(async () => {
    await act(async () => {
      render(<Budgets />);
    })
  })

  it("renders properly", async () => {
    const header = await screen.findByText("Budgets");
    const budgetEntries = await screen.findAllByRole("listitem");

    expect(header).toBeInTheDocument();
    expect(budgetEntries).toHaveLength(mockBudgets.length);
    budgetEntries.forEach((entry, i) => {
      expect(entry).toHaveTextContent(mockBudgets[i].name);
    });
  });
});
