import { describe, it } from "vitest";
import { render, screen } from "@/testUtils.jsx";
import { SignUp } from "..";

describe("Sign Up Route", () => {
  it("renders properly", () => {
    render(<SignUp />);

    const header = screen.getByRole("heading", {
      name: /login/i,
    });
    const emailInput = screen.getByRole("input", {
      name: /email/i,
    });
    const passwordInput = screen.getByRole("input", {
      name: /password/i,
    });
    const confirmPasswordInput = screen.getByRole("input", {
      name: /confirm password/i,
    });
    const submitButton = screen.getByRole("button", {
      name: /login/i,
    });

    expect(header).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("forwards to Login on successful sign up", () => {});

  it("shows error for passwords not matching", () => {});

  it("shows error for duplicate email address", () => {});

  it("shows error for no password", () => {});

  it("shows error for no confirm password");

  it("shows error for no email", () => {});

  it("shows error for no email or password or confirm password", () => {});
});
