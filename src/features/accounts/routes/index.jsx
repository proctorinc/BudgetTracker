import { Navigate, Route, Routes } from "react-router-dom";
import Accounts from "./Accounts";

const AccountRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Accounts />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};

export default AccountRoutes;
