import { Navigate, Route, Routes } from "react-router-dom";
import CreateFund from "./CreateFund";
import Fund from "./Fund";
import Funds from "./Funds";

const FundRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Funds />} />
      <Route path=":fundId" element={<Fund />} />
      <Route path="/create" element={<CreateFund />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};

export default FundRoutes;
