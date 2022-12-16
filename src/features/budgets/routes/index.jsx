import { Navigate, Route, Routes } from "react-router-dom";
import Budgets from "./Budgets";

const BudgetRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Budgets />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};

export default BudgetRoutes;
