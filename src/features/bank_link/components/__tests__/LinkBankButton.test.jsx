import LinkBankButton from "../LinkBankButton";
import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@/test-utils.jsx";

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
    render(<LinkBankButton />);
    const linkBankButton = screen.getByRole("button");
    await waitFor(() => expect(linkBankButton).toBeEnabled(), {
      timeout: 2000,
    });
  });
});
