import { describe, it, vi } from "vitest";
import { screen, render, userEvent } from "@/test-utils.jsx";
import Profile from "../Profile";
import { AuthProvider } from "@/context/AuthContext";

describe("Profile Route", () => {
  it("renders profile", async () => {
    render(
      <AuthProvider>
        <Profile />
      </AuthProvider>
    );

    const profileTitle = await screen.findByRole("heading", /profile/i);
    expect(profileTitle).toBeInTheDocument();
  });
});
