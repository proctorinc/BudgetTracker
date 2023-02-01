import { render, screen, userEvent } from "@/testUtils.jsx";
import { describe, it, vi } from "vitest";
import { ListBoxInput } from "./ListBoxInput";

const mockFunction = vi.fn();
const mockData = [
  "Default Value",
  "Banana",
  "Apple",
  "Orange",
  "Orangutan",
  "Orville Redenbacher",
];
const mockInitialValue = mockData[0];

const ListBox = (
  <ListBoxInput
    selected={mockInitialValue}
    setSelected={mockFunction}
    choices={mockData}
  />
);

describe("List box input", () => {
  it("renders text input correctly", () => {
    render(ListBox);

    const listbox = screen.getByRole("button");

    expect(listbox).toBeInTheDocument();
  });

  it("on click opens list of choices", async () => {
    const user = userEvent.setup();
    render(ListBox);
    const listbox = screen.getByRole("button", {
      name: mockInitialValue,
    });

    await user.click(listbox);
    const listItems = screen.queryAllByRole("option");

    expect(listItems).toHaveLength(6);
  });

  it("runs setSelected when item in choices is selected", async () => {
    const user = userEvent.setup();
    render(ListBox);
    const listbox = screen.getByRole("button", {
      name: mockInitialValue,
    });

    await user.click(listbox);
    const listItems = screen.queryAllByRole("option");
    await user.click(listItems[0]);

    expect(mockFunction).toHaveBeenCalledWith(mockInitialValue);
  });
});
