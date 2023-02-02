import { describe, it } from "vitest";
import { screen, render, withAuth } from "@/testUtils.jsx";
import Profile from "../Profile";
import { mockUser } from "@/__mocks__/mock_features/auth";

vi.mock("@/features/auth/hooks/useAuth", async () => ({
  ...(await vi.importActual("@/features/auth/hooks/useAuth")),
  user: mockUser,
}));

describe("Profile Route", () => {
  it("renders profile", async () => {
    render(withAuth(<Profile />));

    const profileTitle = await screen.findByRole("heading", {
      name: /profile/i,
    });
    const emailHeader = await screen.findByRole("heading", {
      name: /email:/i,
    });
    expect(profileTitle).toBeInTheDocument();
    expect(emailHeader).toHaveTextContent(mockUser.email);
  });
});
