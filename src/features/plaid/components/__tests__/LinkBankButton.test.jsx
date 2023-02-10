import { LinkBankButton } from "../LinkBankButton";
import { describe, it, expect, vi } from "vitest";
import { render, screen, userEvent } from "@/testUtils.jsx";

const mockOpenFunction = vi.fn();
vi.mock("react-plaid-link", async () => ({
  ...(await vi.importActual("react-plaid-link")),
  usePlaidLink: ({ token }) => ({
    ready: token ? true : false,
    open: mockOpenFunction,
  }),
}));

describe("Link bank button", () => {
  beforeEach(() => {
    render(<LinkBankButton />);
  })

  it("button renders on screen", async () => {
    const linkBankButton = await screen.findByRole("button", {
      name: /add account/i,
    });
    expect(linkBankButton).toBeInTheDocument();
  });

  it("button is enabled after a short duration", async () => {
    const user = userEvent.setup();
    const linkBankButton = await screen.findByRole("button", {
      name: /add account/i,
    });

    expect(linkBankButton).toBeInTheDocument();
  });

  it("opens plaid link on click", async () => {
    const user = userEvent.setup();
    const linkBankButton = await screen.findByRole("button", {
      name: /add account/i,
    });
    await user.click(linkBankButton);

    expect(mockOpenFunction).toHaveBeenCalledOnce();
  });
});
