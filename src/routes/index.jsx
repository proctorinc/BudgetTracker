import { useRoutes } from "react-router-dom";

import { protectedRoutes } from "./protected";
import { Home, NotFound } from "@/features/misc";

export const AppRoutes = () => {
  const commonRoutes = [
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
  ];

  const routes = protectedRoutes;
  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
