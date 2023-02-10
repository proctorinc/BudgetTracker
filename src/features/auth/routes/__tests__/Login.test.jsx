import { describe, it } from "vitest";
import { render, screen, userEvent, withAuth, act } from "@/testUtils.jsx";
import { Login } from "..";

describe("Login Route", () => {
  beforeEach(async () => {
    await act(async () => {
      render(withAuth(<Login />));
    })
  })

  it("renders properly", async () => {
    const header = await screen.findByRole("heading", {
      name: /login/i,
    });
    const emailInput = await screen.findByRole("input", {
      name: /email/i,
    });
    const passwordInput = await screen.findByRole("input", {
      name: /password/i,
    });
    const submitButton = await screen.findByRole("button", {
      name: /login/i,
    });

    expect(header).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("successful login works correctly", async () => {
    const user = userEvent.setup();
    const emailInput = await screen.findByRole("input", {
      name: /email/i,
    });
    const passwordInput = await screen.findByRole("input", {
      name: /password/i,
    });
    const submitButton = await screen.findByRole("button", {
      name: /login/i,
    });

    await user.type(emailInput, "valid@email.com");
    await user.type(passwordInput, "validPassword");
    await user.click(submitButton)

    const enterAValidEmailAddress = screen.getByText(/incorrect Email or Password/i);
    expect(enterAValidEmailAddress).not.toBeInTheDocument();
  });

  it("shows error for empty email and password", async () => {
    const user = userEvent.setup();
    const submitButton = await screen.findByRole("button", {
      name: /login/i,
    });

    await user.click(submitButton)
    
    const emailIsRequired = await screen.findByText(/email is required/i);
    const passwordIsRequired = await screen.findByText(/password is required/i);
    
    expect(emailIsRequired).toBeInTheDocument();
    expect(passwordIsRequired).toBeInTheDocument();
  });

  it("shows error for invalid email format", async () => {
    const user = userEvent.setup();
    const submitButton = await screen.findByRole("button", {
      name: /login/i,
    });
    const emailInput = await screen.findByRole("input", {
      name: /email/i,
    });

    await user.type(emailInput, "invalid-email-format");
    await user.click(submitButton)
    
    const enterAValidEmailAddress = await screen.findByText(/enter a valid email address/i);
    expect(enterAValidEmailAddress).toBeInTheDocument();
  });

  it("shows error invalid login", async () => {
    const user = userEvent.setup();
    const submitButton = await screen.findByRole("button", {
      name: /login/i,
    });
    const emailInput = await screen.findByRole("input", {
      name: /email/i,
    });
    const passwordInput = await screen.findByRole("input", {
      name: /password/i,
    });

    await user.type(emailInput, "invalid@email.com");
    await user.type(passwordInput, "invalidPassword");
    await user.click(submitButton);
    
    const enterAValidEmailAddress = await screen.findByText(/incorrect Email or Password/i);
    expect(enterAValidEmailAddress).toBeInTheDocument();
  });
});
