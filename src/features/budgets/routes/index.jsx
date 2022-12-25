import { Navigate, Route, Routes } from "react-router-dom";

import Budget from "./Budget";
import Budgets from "./Budgets";
import CreateBudget from "./CreateBudget";

const BudgetRoutes = () => {
  return (
    <Routes>
      <Route path="/:month/:year" element={<Budgets />} />
      <Route path=":budgetId/:month/:year" element={<Budget />} />
      <Route path="/create" element={<CreateBudget />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};

export default BudgetRoutes;
