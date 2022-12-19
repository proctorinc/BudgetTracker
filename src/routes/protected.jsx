import { Suspense } from "react";

import { Navigate, Outlet } from "react-router-dom";

import AccountRoutes from "@/features/accounts/routes";
import TransactionRoutes from "@/features/transactions/routes";
import FundRoutes from "@/features/funds/routes";
import BudgetRoutes from "@/features/budgets/routes";
import { Loader } from "@/components/Elements/Loader";
import { Home } from "@/features/misc";
import SummaryRoutes from "@/features/summary/routes";

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
};

export const protectedRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/summary/*", element: <SummaryRoutes /> },
      { path: "/funds/*", element: <FundRoutes /> },
      { path: "/accounts/*", element: <AccountRoutes /> },
      { path: "/transactions/*", element: <TransactionRoutes /> },
      { path: "/budgets/*", element: <BudgetRoutes /> },
      { path: "/", element: <Home /> },
      { path: "*", element: <Navigate to="." /> },
    ],
  },
];
