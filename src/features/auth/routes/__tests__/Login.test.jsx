import { describe, it } from "vitest";
import { render, screen } from "@/test-utils.jsx";
import { Login } from "..";

describe("Login Route", () => {
  it("renders properly", () => {
    render(<Login />);

    const header = screen.getByRole("heading", {
      name: /login/i,
    });
    const emailInput = screen.getByRole("input", {
      name: /email/i,
    });
    const passwordInput = screen.getByRole("input", {
      name: /password/i,
    });
    const submitButton = screen.getByRole("button", {
      name: /login/i,
    });

    expect(header).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("forwards to Home on successful login", () => {});

  it("shows error for wrong password", () => {});

  it("shows error for wrong email", () => {});

  it("shows error for no password", () => {});

  it("shows error for no email", () => {});

  it("shows error for no email or password", () => {});
});
