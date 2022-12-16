import { describe, it, vi } from "vitest";
import { screen, render } from "@/test-utils.jsx";
import userEvent from "@testing-library/user-event";
import BudgetEntry from "../BudgetEntry";
// import { BudgetProgressBar } from "../BudgetProgressBar";

const mockBudget = {
  _id: "mock-budget-id",
  name: "Mock Budget",
  goal: 200,
  currentAmount: 75.34,
};

const mockedNavigator = vi.fn();

vi.mock("react-router-dom", async () => ({
  ...(await vi.importActual("react-router-dom")),
  useNavigate: () => mockedNavigator,
}));

// vi.mock("../BudgetProgressBar", () => {
//   const BudgetProgressBar = <div data-testid="budget-bar-chart"></div>;
//   return BudgetProgressBar;
// });

describe("Budget Entry", () => {
  it("renders properly", () => {
    render(<BudgetEntry budget={mockBudget} />);

    const name = screen.getByRole("heading", {
      name: mockBudget.name,
    });
    const usageStatus = screen.getByText("$75.34 of $200.00");
    const leftover = screen.getByText("$124.66 left");
    const barChart = screen.getByTestId("budget-bar-chart");

    expect(name).toBeInTheDocument();
    expect(usageStatus).toBeInTheDocument();
    expect(leftover).toBeInTheDocument();
    expect(barChart).toBeInTheDocument();
  });

  it("forwards to budget page on click", async () => {
    const user = userEvent.setup();
    render(<BudgetEntry budget={mockBudget} />);

    const name = screen.getByRole("heading", {
      name: mockBudget.name,
    });

    await user.click(name);

    expect(mockedNavigator).toHaveBeenCalledWith("/budgets/mock-budget-id");
  });
});
