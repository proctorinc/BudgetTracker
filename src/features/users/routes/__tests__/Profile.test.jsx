import { describe, it, vi } from "vitest";
import { screen, render, userEvent, withAuth } from "@/testUtils.jsx";
import Profile from "../Profile";

describe("Profile Route", () => {
  it("renders profile", async () => {
    render(withAuth(<Profile />));

    const profileTitle = await screen.findByRole("heading", /profile/i);
    expect(profileTitle).toBeInTheDocument();
  });
});
