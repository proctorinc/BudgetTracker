import { AutocompleteInput } from "@/components/Form/AutocompleteInput";
import { render, screen } from "@/test-utils.jsx";
import { describe, it, vi } from "vitest";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import TransactionUpdateDetail from "../TransactionDetail";

const mockLabel = "Source";
const mockIcon = <ChevronUpDownIcon data-testid="test-icon" />;
const mockType = "Budget";
const mockSubtype = "Example budget";
const mockInputOne = (
  <AutocompleteInput selected={mockType} setSelected={vi.fn()} choices={[]} />
);
const mockInputTwo = (
  <AutocompleteInput
    selected={mockSubtype}
    setSelected={vi.fn()}
    choices={[]}
  />
);

describe("Transaction update detail", () => {
  it("renders correctly with one input", () => {
    render(<TransactionUpdateDetail label={mockLabel} icon={mockIcon} />);

    const label = screen.getByText(mockLabel);
    const icon = screen.getByTestId("test-icon");
    const input = screen.getByRole("combobox");

    expect(label).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it("renders correctly with two inputs", () => {
    render(<TransactionUpdateDetail label={mockLabel} icon={mockIcon} />);

    const label = screen.getByText(mockLabel);
    const icon = screen.getByTestId("test-icon");
    const inputs = screen.getAllByRole("combobox");

    expect(label).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(inputs).toHaveLength(2);
  });
});
