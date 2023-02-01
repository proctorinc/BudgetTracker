import { describe, it, vi } from "vitest";
import { screen, render, userEvent } from "@/testUtils.jsx";
import CreateFund from "../CreateFund";

const mockedNavigator = vi.fn();

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
    const createFundButton = screen.getByRole("button", {
      name: /create/i,
    });

    expect(fundNameInput).toBeInTheDocument();
    expect(createFundButton).toBeInTheDocument();
  });

  it("create fund button navigates to create fund page", async () => {
    const user = userEvent.setup();
    render(<CreateFund />);

    const createFundButton = screen.getByRole("button", {
      name: /create/i,
    });
    const fundNameInput = screen.getByRole("textbox", {
      name: /name/i,
    });

    await user.type(fundNameInput, "Testing This Fund");
    await user.click(createFundButton);

    expect(mockedNavigator).toHaveBeenCalledWith("/funds");
  });
});
