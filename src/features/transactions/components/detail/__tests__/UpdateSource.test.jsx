import { render, screen, userEvent } from "@/test-utils.jsx";
import { describe, it } from "vitest";
import UpdateSource from "../SourceDetail";
import { mockFunds } from "@/__mocks__/mock_data/funds";
import { mockBudgets } from "@/__mocks__/mock_data/budgets";

const mockInitialSource = {
  name: mockFunds[0].name,
  id: mockFunds[0]._id,
  type: "fund",
};

describe("Update source", () => {
  it("renders correctly", async () => {
    render(<UpdateSource initialSource={mockInitialSource} />);

    const typeBox = await screen.findByRole("button", {
      name: "Type:",
    });
    const nameBox = await screen.findByRole("button", {
      name: "Name:",
    });

    expect(typeBox).toHaveTextContent("fund");
    expect(nameBox).toHaveTextContent(mockFunds[0].name);
  });

  it("shows the list of funds when type is fund and button is clicked", async () => {
    const user = userEvent.setup();
    render(<UpdateSource initialSource={mockInitialSource} />);

    const nameBox = await screen.findByRole("button", {
      name: "Name:",
    });
    user.click(nameBox);
    const listItems = await screen.findAllByRole("option");

    expect(listItems).toHaveLength(mockFunds.length);
    listItems.forEach((item, i) => {
      expect(item).toHaveTextContent(mockFunds[i].name);
    });
  });

  it("shows list of budgets when type is changed and button is clicked", async () => {
    const user = userEvent.setup();
    render(<UpdateSource initialSource={mockInitialSource} />);

    const typeBox = await screen.findByRole("button", {
      name: "Type:",
    });
    user.click(typeBox);
    const listItems = await screen.findAllByRole("option");
    user.click(listItems[1]);
    expect(typeBox).toHaveTextContent("budget");
    // const typeText = screen.getByText("budget");

    const nameBox = await screen.findByRole("button", {
      name: "Name:",
    });

    user.click(nameBox);
    const budgetItems = await screen.findAllByRole("option");
    console.table(budgetItems);
    expect(budgetItems).toHaveLength(mockBudgets.length);
    budgetItems.forEach((item, i) => {
      expect(item).toHaveTextContent(mockBudgets[i].name);
    });

    screen.logTestingPlaygroundURL();
  });

  it("type changes when new type selected", async () => {
    const user = userEvent.setup();
    render(<UpdateSource initialSource={mockInitialSource} />);

    const typeBox = await screen.findByRole("button", {
      name: "Type:",
    });
    user.click(typeBox);
    const listItems = await screen.findAllByRole("option");
    user.click(listItems[1]);
    const typeText = screen.getByText("budget");

    expect(listItems).toHaveLength(2);
    expect(typeText).toBeInTheDocument();
  });
});
