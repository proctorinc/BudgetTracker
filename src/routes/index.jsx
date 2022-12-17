import { useRoutes } from "react-router-dom";

import useAuth from "@/hooks/useAuth";
import { Home, NotFound } from "@/features/misc";

import { publicRoutes } from "./public";
import { protectedRoutes } from "./protected";

export const AppRoutes = () => {
  const auth = useAuth();
  const commonRoutes = [{ path: "*", element: <NotFound /> }];

  const routes = auth.user ? protectedRoutes : publicRoutes;
  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
