import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { QueryClientProvider } from "react-query";

import { queryClient } from "./lib/react-query";

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
