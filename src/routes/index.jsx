import { useRoutes } from "react-router-dom";
import { protectedRoutes } from "./protected";

export const AppRoutes = () => {
  const commonRoutes = [{ path: "/", element: <div>Landing Route</div> }];

  const routes = protectedRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
