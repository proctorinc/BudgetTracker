import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

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
        <Router>{children}</Router>
      </ErrorBoundary>
    </Suspense>
  );
};
