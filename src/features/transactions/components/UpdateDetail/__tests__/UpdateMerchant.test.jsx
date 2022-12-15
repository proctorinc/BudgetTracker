import { render, screen } from "@/test-utils.jsx";
import { describe, it, vi } from "vitest";
import UpdateMerchant from "../UpdateMerchant";

const mockInitialMerchant = "Demo Merchant";

describe("Update Merchant", () => {
  it("renders correctly", () => {
    render(<UpdateMerchant merchant={mockInitialMerchant} />);

    const merchantLabel = screen.getByText(mockInitialMerchant);
    const merchantInput = screen.getByRole("", {
      name: mockInitialMerchant,
    });
    const updateButton = screen.getByRole("button", {
      name: "Submit",
    });

    expect(merchantLabel).toBeInTheDocument();
    expect(merchantInput).toBeInTheDocument();
    expect(updateButton).toBeInTheDocument();
  });

  it("returns new merchant data on submit", () => {});
});
