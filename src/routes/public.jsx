import { Login, SignUp } from "@/features/auth";
import { Home } from "@/features/misc";

export const publicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  { path: "/login", element: <Login /> },
  { path: "/sign-up", element: <SignUp /> },
];
