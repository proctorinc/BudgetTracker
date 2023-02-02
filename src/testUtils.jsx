import { vi } from "vitest";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { QueryClientProvider } from "react-query";
import userEvent from "@testing-library/user-event";

import { queryClient } from "./lib/react-query";
import { AuthProvider } from "./context/AuthContext";

// vi.mock("AuthProvider", async () => ({
//   ...(await vi.importActual("AuthProvider")),
//   useNavigate: () => mockedNavigator,
// }));

const withAuth = (children) => {
  return <AuthProvider>{children}</AuthProvider>;
};

const providers = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>{children}</Router>
    </QueryClientProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: providers, ...options });

export * from "@testing-library/react";
export { customRender as render };
export { userEvent };
export { withAuth };
