import { describe, it, vi } from "vitest";
import { screen, render, userEvent } from "@/testUtils.jsx";
import Funds from "../Funds";

vi.mock("../../components/FundsChart", () => ({
  default: () => <div data-testid="funds-chart">Pie Chart</div>,
}));

const mockedNavigator = vi.fn();
vi.mock("react-router-dom", async () => ({
  ...(await vi.importActual("react-router-dom")),
  useNavigate: () => mockedNavigator,
}));

describe("Funds Route", () => {
  it("renders funds list", async () => {
    render(<Funds />);
    const fundsTitle = await screen.findByRole("heading", {
      name: /funds/i,
    });
    expect(fundsTitle).toBeInTheDocument();
  });

  it("renders funds chart", async () => {
    render(<Funds />);

    const fundsChart = await screen.findByTestId("funds-chart");

    expect(fundsChart).toBeInTheDocument();
  });

  it("renders create fund button", async () => {
    render(<Funds />);

    const createFundButton = await screen.findByRole("button", {
      name: /new fund/i,
    });

    expect(createFundButton).toBeInTheDocument();
  });

  it("create fund button navigates to create fund page", async () => {
    const user = userEvent.setup();
    render(<Funds />);

    const createFundButton = await screen.findByRole("button", {
      name: /new fund/i,
    });

    await user.click(createFundButton);

    expect(mockedNavigator).toHaveBeenCalledWith("/funds/create");
  });
});
