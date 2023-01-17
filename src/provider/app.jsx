import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { queryClient } from "@/lib/react-query";
import { Oops } from "@/features/misc";
import ScrollToTop from "@/features/misc/components/ScrollToTop";
import { AuthProvider } from "@/context/AuthContext";

export const AppProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ErrorBoundary FallbackComponent={() => <Oops />}>
          <ReactQueryDevtools />
          <AuthProvider>
            <ScrollToTop />
            {children}
          </AuthProvider>
        </ErrorBoundary>
      </Router>
    </QueryClientProvider>
  );
};
