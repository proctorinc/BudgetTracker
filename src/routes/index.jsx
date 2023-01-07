import { useRoutes } from "react-router-dom";

import useAuth from "@/features/auth/hooks/useAuth";
import { NotFound, TermsOfService, PrivacyPolicy } from "@/features/misc";

import { publicRoutes } from "./public";
import { protectedRoutes } from "./protected";

export const AppRoutes = () => {
  const auth = useAuth();
  const commonRoutes = [
    { path: "*", element: <NotFound /> },
    { path: "/terms-of-service", element: <TermsOfService /> },
    { path: "/privacy-policy", element: <PrivacyPolicy /> },
  ];

  const routes = auth?.isAuthenticated ? protectedRoutes : publicRoutes;
  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
