import LinkBankButton from "../LinkBankButton";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@/test-utils.jsx";
import userEvent from "@testing-library/user-event";

const mockOpenFunction = vi.fn();
vi.mock("react-plaid-link", async () => ({
  ...(await vi.importActual("react-plaid-link")),
  usePlaidLink: ({ token }) => ({
    ready: token ? true : false,
    open: mockOpenFunction,
  }),
}));

describe("Link bank button", () => {
  it("button renders on screen", () => {
    render(<LinkBankButton />);
    const linkBankButton = screen.getByRole("button");
    expect(linkBankButton).toBeInTheDocument();
  });

  it("button starts out disabled initially", () => {
    render(<LinkBankButton />);
    const linkBankButton = screen.getByRole("button");
    expect(linkBankButton).toBeDisabled();
  });

  it("button is enabled after a short duration", async () => {
    const user = userEvent.setup();
    render(<LinkBankButton />);
    const linkBankButton = await screen.findByRole("button", {
      name: "Connect a bank account",
    });

    expect(linkBankButton).toBeInTheDocument();
  });

  it("opens plaid link on click", async () => {
    const user = userEvent.setup();
    render(<LinkBankButton />);
    const linkBankButton = await screen.findByRole("button", {
      name: "Connect a bank account",
    });
    await user.click(linkBankButton);

    expect(mockOpenFunction).toHaveBeenCalledOnce();
  });
});
