import { describe, it, vi } from "vitest";
import { screen, render } from "@/test-utils.jsx";
import userEvent from "@testing-library/user-event";
import CreateFund from "../CreateFund";

const mockedNavigator = vi.fn();

vi.mock("../../components/FundsChart", () => () => {
  return <MockFundChart data-testid="fund-chart" />;
});

vi.mock("react-router-dom", async () => ({
  ...(await vi.importActual("react-router-dom")),
  useNavigate: () => mockedNavigator,
}));

describe("Create Fund Route", () => {
  it("renders create fund form", () => {
    render(<CreateFund />);

    const fundNameInput = screen.getByRole("textbox", {
      name: /name/i,
    });
    const fundInitialAmountInput = screen.getByRole("spinbutton", {
      name: /balance/i,
    });
    const createFundButton = screen.getByRole("button", {
      name: /create fund/i,
    });

    expect(fundNameInput).toBeInTheDocument();
    expect(fundInitialAmountInput).toBeInTheDocument();
    expect(createFundButton).toBeInTheDocument();
  });

  it("create fund button navigates to create fund page", async () => {
    const user = userEvent.setup();
    render(<CreateFund />);

    const createFundButton = screen.getByRole("button", {
      name: /create fund/i,
    });
    const fundNameInput = screen.getByRole("textbox", {
      name: /name/i,
    });
    const fundInitialAmountInput = screen.getByRole("spinbutton", {
      name: /balance/i,
    });

    await user.type(fundNameInput, "Testing This Fund");
    await user.type(fundInitialAmountInput, "1000");
    await user.click(createFundButton);

    expect(mockedNavigator).toHaveBeenCalledWith("/funds");
  });
});
