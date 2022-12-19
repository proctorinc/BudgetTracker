import { Navigate, Route, Routes } from "react-router-dom";
import Budget from "./Budget";
import Budgets from "./Budgets";

const BudgetRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Budgets />} />
      <Route path=":budgetId/:month" element={<Budget />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};

export default BudgetRoutes;
