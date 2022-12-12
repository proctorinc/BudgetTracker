import { render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import UpdateSource from "../UpdateSource";

const mockInitialSource = {
  name: "Test",
  id: "d897h3d98h3d",
  type: "fund",
};
const mockInitialSourceType = "Fund";
const mockInitialSourceItem = "";
const mockFinalSourceItem = "";

const mockTypes = ["funds", "budget"];
const mockBudgets = ["Rent", "Eating out", "Shopping", "Misc Expenses"];
const mockFunds = [
  "Car Funds",
  "House Fund",
  "Annika Allowance",
  "Matt Allowance",
];

describe("Update source", () => {
  it("renders correctly", () => {
    render(<UpdateSource source={mockInitialSource} />);

    const listbox = screen.getByRole("button", {
      name: mockInitialSourceType,
    });
    const autocompleteinput = screen.getByRole("combobox");

    expect(listbox).toBeInTheDocument();
    expect(autocompleteinput).toHaveTextContent(mockInitialSourceItem);
  });

  it("changes second input choices by changing first input", () => {
    const user = userEvent.setup();
    render(<UpdateSource source={mockInitialSource} />);

    const listbox = screen.getByRole("button", {
      name: defaultInitialValue,
    });
    user.click(listbox);
    const listItems = screen.queryAllByRole("option");
    user.click(listItems[0]);
    const autocompleteinput = screen.getByRole("combobox");

    expect(autocompleteinput).toHaveTextContent(mockFinalSourceItem);
  });
});
