import { render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { AutocompleteInput } from ".";
import userEvent from "@testing-library/user-event";

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

const ComboBox = (
  <AutocompleteInput
    selected={mockInitialValue}
    setSelected={mockFunction}
    choices={mockData}
  />
);

describe("Combo Box", () => {
  it("renders text input and button initially", () => {
    render(ComboBox);
    const button = screen.getByRole("button");
    const textInput = screen.getByRole("combobox");

    expect(textInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("Clicking the button opens the list of options", async () => {
    const user = userEvent.setup();
    render(ComboBox);

    const button = screen.getByRole("button");
    await user.click(button);
    const listItems = screen.getAllByRole("option");

    listItems.forEach((item, i) => {
      expect(item).toHaveTextContent(mockData[i]);
    });
  });

  it("shows list of one match when text entered", async () => {
    const user = userEvent.setup();
    render(ComboBox);
    const textInput = screen.getByRole("combobox");

    await user.clear(textInput);
    await user.type(textInput, mockInitialValue);
    const listItems = screen.getAllByRole("option");

    expect(listItems).toHaveLength(1);
  });

  it("shows no list with any matches when text entered", async () => {
    const user = userEvent.setup();
    render(ComboBox);

    const textInput = screen.getByRole("combobox");

    await user.clear(textInput);
    await user.type(textInput, "Not Valid Match");
    const listItems = screen.queryByRole("option");

    expect(listItems).not.toBeInTheDocument();
  });

  it("shows list of three matches when text entered", async () => {
    const user = userEvent.setup();
    render(ComboBox);

    const textInput = screen.getByRole("combobox");

    await user.clear(textInput);
    await user.type(textInput, "Or");
    const listItems = screen.getAllByRole("option");

    expect(listItems).toHaveLength(3);
  });

  it("runs setSelected when item in list is selected", async () => {
    const user = userEvent.setup();
    render(ComboBox);
    const textInput = screen.getByRole("combobox");

    await user.clear(textInput);
    await user.type(textInput, mockInitialValue);
    const listItems = screen.getAllByRole("option");
    await user.click(listItems[0]);

    expect(mockFunction).toHaveBeenCalledWith(mockInitialValue);
  });
});
