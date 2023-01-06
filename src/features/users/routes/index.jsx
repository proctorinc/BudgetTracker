import { Navigate, Route, Routes } from "react-router-dom";
import Profile from "./Profile";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};

export default UserRoutes;
