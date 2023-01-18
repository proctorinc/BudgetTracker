import { describe, it, vi } from "vitest";
import { screen, render, userEvent } from "@/test-utils.jsx";
import Profile from "../Profile";

describe("Profile Route", () => {
  it("renders profile", async () => {
    render(<Profile />);

    const profileTitle = screen.getByRole("heading", /profile/i);
    expect(profileTitle).toBeInTheDocument();
  });
});
