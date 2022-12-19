import { Navigate, Route, Routes } from "react-router-dom";
import { Summary } from "./Summary";

const SummaryRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Summary />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};

export default SummaryRoutes;
