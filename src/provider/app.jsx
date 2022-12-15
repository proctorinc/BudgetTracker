import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { queryClient } from "@/lib/react-query";

export const AppProvider = ({ children }) => {
  const ErrorFallback = () => {
    return <div>Oops! Something went wrong!</div>;
  };

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          Loading...
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <Router>{children}</Router>
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  );
};
